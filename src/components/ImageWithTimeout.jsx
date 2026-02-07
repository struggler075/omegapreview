import React, { useState, useEffect, useRef } from 'react';

const ImageWithTimeout = ({ 
  src, 
  fallbackSrc, 
  alt, 
  className = '', 
  timeout = 3000,
  showLoader = true,
  loaderClassName = '',
  errorClassName = '',
  priority = false,
  crossOrigin = null,
  referrerPolicy = 'no-referrer-when-downgrade',
  sizes,
  srcSet,
  useMap,
  width,
  height,
  onLoad,
  onError,
  ...props 
}) => {
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'loaded', 'error'
  const [displaySrc, setDisplaySrc] = useState(src);
  
  const timeoutRef = useRef(null);
  const isLoadingRef = useRef(false);
  const currentSrcRef = useRef(src);

  const getDefaultFallback = () => {
    return 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2670';
  };

  const loadImage = (url, isFallback = false) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      if (crossOrigin) img.crossOrigin = crossOrigin;
      img.referrerPolicy = referrerPolicy;
      
      const timer = setTimeout(() => {
        img.onload = null;
        img.onerror = null;
        reject(new Error('Image load timeout'));
      }, timeout);
      
      img.onload = () => {
        clearTimeout(timer);
        resolve(url);
      };
      
      img.onerror = () => {
        clearTimeout(timer);
        reject(new Error('Image load failed'));
      };
      
      img.src = url;
    });
  };

  useEffect(() => {
    const init = async () => {
      if (!src) {
        const fallbackUrl = fallbackSrc || getDefaultFallback();
        setDisplaySrc(fallbackUrl);
        setStatus('loading');
        return;
      }

      currentSrcRef.current = src;
      setDisplaySrc(src);
      setStatus('loading');
      isLoadingRef.current = true;

      try {
        await loadImage(src);
        if (currentSrcRef.current === src) {
          setStatus('loaded');
          isLoadingRef.current = false;
        }
      } catch (error) {
        if (currentSrcRef.current === src && isLoadingRef.current) {
          console.log('Main image failed or timeout, loading fallback');
          
          const fallbackUrl = fallbackSrc || getDefaultFallback();
          currentSrcRef.current = fallbackUrl;
          setDisplaySrc(fallbackUrl);
          
          try {
            await loadImage(fallbackUrl, true);
            if (currentSrcRef.current === fallbackUrl) {
              setStatus('loaded');
            }
          } catch (fallbackError) {
            if (currentSrcRef.current === fallbackUrl) {
              setStatus('error');
            }
          }
        }
      }
    };

    init();

    return () => {
      currentSrcRef.current = null;
      isLoadingRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [src]);

  const handleImgLoad = (e) => {
    // Дополнительная проверка на случай, если onload сработает позже
    if (status !== 'loaded') {
      setStatus('loaded');
    }
    onLoad?.(e);
  };

  const handleImgError = (e) => {
    // Если это ошибка основного изображения
    if (displaySrc === src) {
      const fallbackUrl = fallbackSrc || getDefaultFallback();
      setDisplaySrc(fallbackUrl);
      setStatus('loading');
    } else {
      // Если ошибка fallback изображения
      setStatus('error');
    }
    onError?.(e);
  };

  const shouldShowLoader = showLoader && status === 'loading';
  const showError = status === 'error';

  return (
    <div className="relative w-full h-full overflow-hidden">
      {shouldShowLoader && (
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-br from-gray-800 to-gray-900"
          style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite'
          }}
        />
      )}

      {shouldShowLoader && (
        <div className={`absolute inset-0 z-10 flex items-center justify-center bg-black/20 ${loaderClassName}`}>
          <div className="w-6 h-6 border-2 border-gray-600 border-t-red-500 rounded-full animate-spin" />
        </div>
      )}

      <img
        src={displaySrc}
        alt={alt}
        className={`${className} ${
          status === 'loaded' 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-105'
        } transition-all duration-300 ease-out`}
        onLoad={handleImgLoad}
        onError={handleImgError}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        crossOrigin={crossOrigin}
        referrerPolicy={referrerPolicy}
        sizes={sizes}
        srcSet={srcSet}
        useMap={useMap}
        width={width}
        height={height}
        {...props}
      />

      {showError && (
        <div className={`absolute inset-0 flex items-center justify-center bg-gray-800/90 ${errorClassName}`}>
          <div className="text-center p-4">
            <svg className="w-5 h-5 text-red-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="text-xs text-gray-300">Не удалось загрузить изображение</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ImageWithTimeout);