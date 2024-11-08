// import AdminJS, { ResourceOptions } from 'adminjs';
// import { join } from 'path';
// import { MeditationThemeEntity } from 'src/api/meditation-themes/entities/meditation-theme.entity';
// import { Category } from 'src/api/meditation-themes/interfaces/meditation-theme.interface';

// const ImageComponent = AdminJS.bundle(
//   join(__dirname, '../../..', 'components', 'pinned-items', 'Image.jsx'),
// );

// export const ThemeResoruce = (
//   category: Category,
// ): {
//   resource: any;
//   options: ResourceOptions;
// } => ({
//   resource: MeditationThemeEntity,
//   options: {
//     navigation: {
//       name: category,
//       icon: 'Image',
//     },
//     href: `admin/resources/MeditationThemeEntity?filters.category=${category.toString()}&page=1`,
//     listProperties: ['imageUrl', 'titleRu', 'category', 'price', 'priority'],
//     filterProperties: [
//       'imageUrl',
//       'title',
//       'titleRu',
//       'category',
//       'categoryRu',
//       'price',
//       'priority',
//       'appstoreProductId',
//       'googleplayProductId',
//     ],
//     showProperties: [
//       'imageUrl',
//       'title',
//       'titleRu',
//       'category',
//       'categoryRu',
//       'price',
//       'priority',
//       'appstoreProductId',
//       'googleplayProductId',
//     ],
//     editProperties: [
//       'imageUrl',
//       'title',
//       'titleRu',
//       'category',
//       'categoryRu',
//       'price',
//       'priority',
//       'appstoreProductId',
//       'googleplayProductId',
//     ],
//     // editProperties: ['imageUrl', 'titleRu', 'category', 'price', 'priority'],
//     // filterProperties: ['imageUrl', 'titleRu', 'category', 'price', 'priority'],
//     properties: {
//       imageUrl: {
//         components: {
//           list: ImageComponent,
//           show: ImageComponent,
//         },
//       },
//       //   imageUrl: {
//       //     components: {
//       //       show: ImageComponent,
//       //       list: ImageComponent,
//       //     },
//       //   },
//       //   appstoreProductId: {
//       //     isVisible: {
//       //       list: false,
//       //       filter: false,
//       //       show: true,
//       //       edit: true,
//       //     },
//       //   },
//       //   googleplayProductId: {
//       //     isVisible: {
//       //       list: false,
//       //       filter: false,
//       //       show: true,
//       //       edit: true,
//       //     },
//       //   },
//     },
//   },
// });
