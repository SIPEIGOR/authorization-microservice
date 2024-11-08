import { AdminJSOptions } from 'adminjs';

export const options: AdminJSOptions = {
  rootPath: '/admin',

  locale: {
    language: 'ua',
    translations: {
      labels: {
        ProductsEntity: 'Продукти',
        UserEntity: 'Користувачі',
        OrdersEntity: 'Замовлення',
        ShopCartEntity: 'Кошики',
      },
      properties: {
        id: 'ID',
        resultsTake: 'Кількість результатів',
        lastsFor: 'Тривалість',
        downtime: 'Перерва',
        whatAre: 'Що таке',
      },
      actions: {
        new: 'Створити нове',
        edit: 'Редагувати',
        show: 'Детально',
        delete: 'Видалити',
      },
      buttons: {
        save: 'Зберегти',
        filter: 'Фільтрувати',
      },
    },
  },
};
