import React, { useState } from 'react';
import ImageWithTimeout from './components/ImageWithTimeout';

const ServerPreview = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = {
    'ender-blaze': { src: '/src/assets/ender-blaze.png', alt: 'Ифрит Края' },
    'boil-world': { src: '/src/assets/boil-world.png', alt: 'Пылающий Край' },
    'euca-world': { src: '/src/assets/euca-world.png', alt: 'Небесный Край' },
    'altar': { src: '/src/assets/altar.png', alt: 'Алтарь усиления' },
    'ka4': { src: '/src/assets/ka4.png', alt: 'Руны усиления' },
    'event-no-open': { src: '/src/assets/event-no-open.png', alt: 'Система Кристаллов' },
    'swords': { src: '/src/assets/swords.png', alt: 'Новое оружие' },
    'lvl-2': { src: '/src/assets/lvl-2.png', alt: 'Уровень улучшения' },
    'armors': { src: '/src/assets/armors.png', alt: 'Новая броня' },
    'beast': { src: '/src/assets/beast.png', alt: 'Зверь Ада' },
    'wreck': { src: '/src/assets/wreck.png', alt: 'Врек' }
  };

  const openImage = (imageKey) => {
    setSelectedImage(images[imageKey]);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-white border-b border-gray-200 py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Divine RPG Omega</h1>
              <p className="text-gray-600">Minecraft 1.7.10</p>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Основное описание */}
          <div className="mb-10 bg-white rounded-lg p-8 border border-gray-300">
            <p className="text-gray-700 leading-relaxed">
              Сервер с полностью переписанным модом DivineRPG. Исправлены критические ошибки, добавлены новые миры, 
              боссы, системы прокачки и оптимизации игрового процесса.
            </p>
          </div>

          {/* Две колонки с контентом */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Левая колонка */}
            <div className="space-y-8">
              {/* Главный босс */}
              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <h2 className="text-xl font-bold mb-4 text-orange-700 border-b pb-2">Ифрит Края</h2>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• Эволюционирует: 50 стадий усиления</li>
                  <li>• С каждым убийством становится сильнее</li>
                  <li>• Дроп зависит от текущего уровня</li>
                </ul>
                <div 
                  className="bg-gray-100 rounded border border-gray-300 p-4 h-48 flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImage('ender-blaze')}
                >
                  <ImageWithTimeout
                    src={images['ender-blaze'].src}
                    alt={images['ender-blaze'].alt}
                    className="absolute inset-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </div>

              {/* Новая броня */}
              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <h2 className="text-xl font-bold mb-4 text-blue-700 border-b pb-2">Добавленная броня</h2>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-gray-50 rounded border border-gray-200">
                    <div className="font-medium">Пробужденная Халитовая</div>
                    <div className="text-sm text-gray-600 mt-1">Создается из халитовой брони и божественных осколков</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded border border-gray-200">
                    <div className="font-medium">Пылающая броня</div>
                    <div className="text-sm text-gray-600 mt-1">Фармится с Ифрита Края, самая сильная в моде</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded border border-gray-200">
                    <div className="font-medium">Селестиум броня</div>
                    <div className="text-sm text-gray-600 mt-1">Находится в Небесном Крае</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка */}
            <div className="space-y-8">
              {/* Новые миры */}
              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <h2 className="text-xl font-bold mb-4 text-green-700 border-b pb-2">Дополнительные миры</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium mb-2">Пылающий Край</div>
                    <div 
                      className="bg-gray-100 rounded border border-gray-300 p-4 h-36 flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImage('boil-world')}
                    >
                      <ImageWithTimeout
                        src={images['boil-world'].src}
                        alt={images['boil-world'].alt}
                        className="absolute inset-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Небесный Край</div>
                    <div 
                      className="bg-gray-100 rounded border border-gray-300 p-4 h-36 flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openImage('euca-world')}
                    >
                      <ImageWithTimeout
                        src={images['euca-world'].src}
                        alt={images['euca-world'].alt}
                        className="absolute inset-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Новые боссы */}
              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <h2 className="text-xl font-bold mb-4 text-red-700 border-b pb-2">Новые противники</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded border border-gray-200">
                    <div className="font-medium">Зверь Ада</div>
                    <div className="text-sm text-gray-600 mt-1">Босс в Аду, дропает рессору для создания портала</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded border border-gray-200">
                    <div className="font-medium">Испепелитель</div>
                    <div className="text-sm text-gray-600 mt-1">Босс в Небесном Крае, дропает ресурсы мира</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded border border-gray-200">
                    <h4 className="font-medium">Врек</h4>
                    <p className="text-sm text-gray-600 mt-1">Снежный скелет в Заснежье. Дроп: предметы мира Заснежье</p>
                  </div>
                </div>
              </div>

              {/* Оптимизации */}
              <div className="bg-white rounded-lg p-6 border border-gray-300">
                <h2 className="text-xl font-bold mb-4 text-purple-700 border-b pb-2">Улучшения системы</h2>
                <div className="space-y-3 text-gray-700">
                  <div>• Боссы выпадают парами: штаны/ботинки, нагрудник/шлем</div>
                  <div>• Переработанная система книг зачарований</div>
                  <div>• Книги доступны у торговца в Мортуме за мистические души</div>
                </div>
              </div>
            </div>
          </div>

          {/* Новые зачарования */}
          <div className="mb-10 bg-white rounded-lg p-8 border border-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 border-b pb-3">Дополнительные зачарования</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-5 bg-gray-50 rounded border border-gray-200">
                <div className="font-bold mb-2 text-gray-800">Дистанция I</div>
                <div className="text-sm text-gray-600">Увеличение дистанции нанесения урона</div>
              </div>
              <div className="p-5 bg-gray-50 rounded border border-gray-200">
                <div className="font-bold mb-2 text-gray-800">Обилие опыта I-III</div>
                <div className="text-sm text-gray-600">Повышение количества получаемого опыта</div>
              </div>
              <div className="p-5 bg-gray-50 rounded border border-gray-200">
                <div className="font-bold mb-2 text-gray-800">Авто-переплавка I</div>
                <div className="text-sm text-gray-600">Автоматическая переплавка добычи</div>
              </div>
              <div className="p-5 bg-gray-50 rounded border border-gray-200">
                <div className="font-bold mb-2 text-gray-800">Телекинез I</div>
                <div className="text-sm text-gray-600">Лут сразу попадает в инвентарь</div>
              </div>
            </div>
          </div>

          {/* OmegaLevels */}
          <div className="mb-10 bg-white rounded-lg p-8 border border-gray-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">OmegaLevels</h2>
                <p className="text-gray-700 mb-6">
                  Система улучшения предметов до седьмого уровня. Для усиления используются руны на специальном алтаре.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <div className="text-gray-700">Предметы усиливаются с помощью рун</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <div className="text-gray-700">Максимальный уровень улучшения: 7</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <div className="text-gray-700">Алтарь усиления для модификации предметов</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div 
                  className="bg-gray-100 rounded border border-gray-300 p-4 h-40 flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImage('altar')}
                >
                  <ImageWithTimeout
                    src={images['altar'].src}
                    alt={images['altar'].alt}
                    className="absolute inset-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div 
                  className="bg-gray-100 rounded border border-gray-300 p-4 h-40 flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImage('ka4')}
                >
                  <ImageWithTimeout
                    src={images['ka4'].src}
                    alt={images['ka4'].alt}
                    className="absolute inset-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Мистическая душа */}
          <div className="mb-10 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4 text-orange-800">Мистическая душа</h2>
                <p className="text-gray-700 mb-6">
                  Основной игровой ресурс, который можно получить при убийстве Ифрита Края начиная с 40 стадии. 
                  Используется для различных целей в эндгейм-контенте.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded border border-yellow-100">
                    <div className="font-medium mb-2 text-gray-800">Получение</div>
                    <div className="text-sm text-gray-600">
                      Выпадает с Ифрита Края на 40+ стадии эволюции
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded border border-yellow-100">
                    <div className="font-medium mb-2 text-gray-800">Основное применение</div>
                    <div className="text-sm text-gray-600">
                      Покупка улучшенных книг зачарований у торговца в Мортуме
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded border border-yellow-100">
                    <div className="font-medium mb-2 text-gray-800">Создание брони</div>
                    <div className="text-sm text-gray-600">
                      Крафт Пылающей брони - самой сильной в моде
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded border border-yellow-100">
                    <div className="font-medium mb-2 text-gray-800">Создание оружия</div>
                    <div className="text-sm text-gray-600">
                      Крафт Пылающего меча для эндгейм-контента
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-b from-yellow-100 to-orange-100 rounded-lg p-6 border border-yellow-300 flex flex-col justify-center">
                <h3 className="font-bold mb-4 text-center text-orange-700">Цикл прокачки</h3>
                <ol className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0">1</div>
                    <div>Фарм Ифрита Края до 40 стадии</div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0">2</div>
                    <div>Получение мистических душ</div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0">3</div>
                    <div>Покупка улучшенных книг в Мортуме</div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 flex-shrink-0">4</div>
                    <div>Крафт Пылающей брони и оружия</div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Ивент Кристаллы */}
          <div className="mb-10 bg-white rounded-lg p-8 border border-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Система Кристаллов</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-gray-700 mb-4">
                  В Пылающем мире находится костяной сундук на воздушном острове. При использовании Пылающего ключа 
                  активируется меню выбора кристаллов.
                </p>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• Доступно 5 кристаллов на выбор</li>
                  <li>• Можно забрать лут с 3 выбранных кристаллов</li>
                  <li>• Различные типы наград в зависимости от выбора</li>
                </ul>
              </div>
              <div 
                className="bg-gray-100 rounded border border-gray-300 p-4 h-64 flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImage('event-no-open')}
              >
                <ImageWithTimeout
                  src={images['event-no-open'].src}
                  alt={images['event-no-open'].alt}
                  className="absolute inset-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Новое оружие */}
          <div className="mb-10 bg-white rounded-lg p-8 border border-gray-300">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 border-b pb-3">Дополнительные скриншоты</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {['swords', 'lvl-2', 'armors', 'beast', 'wreck'].map((imageKey) => (
                <div 
                  key={imageKey}
                  className="bg-gray-100 rounded border border-gray-300 p-4 h-32 flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openImage(imageKey)}
                >
                  <ImageWithTimeout
                    src={images[imageKey].src}
                    alt={images[imageKey].alt}
                    className="absolute inset-0 w-full h-full object-cover rounded opacity-0 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* P.S. блок - добавлен перед футером */}
          <div className="mb-10 bg-gradient-to-r from-gray-100 to-blue-50 rounded-lg p-8 border border-blue-200">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 text-blue-800">P.S.</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-700 mb-4 text-lg">
                  Это текущая реализация модификации. В случае одобрения и дальнейшего развития проекта 
                  будут реализованы все запланированные улучшения и новые системы.
                </p>
                <div className="bg-white rounded-lg p-6 border border-blue-100">
                  <h3 className="font-bold mb-3 text-gray-800">Планируемые дополнения:</h3>
                  <ul className="text-gray-700 space-y-2 text-left">
                  <li>
                    Для <strong>лучшего</strong> понимания концепции:
                    <p>Можете посмотреть видео на YouTube по запросу <strong>"Omega DivineRPG"</strong>.</p>
                  </li>                  </ul>
                </div>
                <p className="text-gray-600 mt-6 text-sm">
                  Текущая версия демонстрирует основную концепцию и готовность к дальнейшему развитию.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="text-gray-600">Divine RPG Omega</div>
            <div className="text-sm text-gray-500 mt-1">Minecraft 1.7.10</div>
          </div>
        </footer>
      </div>

      {/* Модальное окно для увеличенного изображения */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button 
              onClick={closeImage}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
            >
              ✕ Закрыть
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">{selectedImage.alt}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServerPreview;