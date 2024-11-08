// import AdminJS, { ResourceOptions } from 'adminjs';
// import { join } from 'path';
// import { contentNavigation } from '../navigation/content.navigation';
// import { ProgramEntity } from 'src/api/programs/entities/program.entity';

// const ImageComponent = AdminJS.bundle(
//   join(__dirname, '../../..', 'components', 'pinned-items', 'Image.jsx'),
// );

// export const ProgramResoruce: {
//   resource: any;
//   options: ResourceOptions;
// } = {
//   resource: ProgramEntity,
//   options: {
//     navigation: contentNavigation,
//     listProperties: ['imageUrl', 'titleRu', 'category', 'price', 'priority'],
//     properties: {
//       imageUrl: {
//         components: {
//           show: ImageComponent,
//           list: ImageComponent,
//         },
//       },
//       appstoreProductId: {
//         isVisible: {
//           list: false,
//           filter: false,
//           show: true,
//           edit: true,
//         },
//       },
//       googleplayProductId: {
//         isVisible: {
//           list: false,
//           filter: false,
//           show: true,
//           edit: true,
//         },
//       },
//     },
//   },
// };
