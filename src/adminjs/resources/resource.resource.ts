// import AdminJS, { ResourceOptions } from 'adminjs';
// import { join } from 'path';
// import { contentNavigation } from '../navigation/content.navigation';
// import { MeditationEntity } from 'src/api/meditations/entities/meditation.entity';

// const ImageComponent = AdminJS.bundle(
//   join(__dirname, '../../..', 'components', 'pinned-items', 'Image.jsx'),
// );

// const TextComponent = AdminJS.bundle(
//   join(__dirname, '../../..', 'components', 'text-field', 'Text.jsx'),
// );

// export const ResourceResoruce: {
//   resource: any;
//   options: ResourceOptions;
// } = {
//   resource: MeditationEntity,
//   options: {
//     navigation: contentNavigation,
//     sort: {
//       sortBy: 'themeId',
//       direction: 'asc',
//     },
//     listProperties: [
//       'theme.imageUrl',
//       'title',
//       'category',
//       'section',
//       'priority',
//     ],
//     showProperties: [
//       'theme.imageUrl',
//       'id',
//       'priority',
//       'title',
//       'titleRu',
//       'category',
//       'categoryRu',
//       'section',
//       'sectionRu',
//       'isVideo',
//       'fileUrl',
//       'duration',
//       'themeId',
//       'description',
//       'descriptionRu',
//     ],
//     editProperties: [
//       'title',
//       'titleRu',
//       'priority',
//       'category',
//       'categoryRu',
//       'section',
//       'sectionRu',
//       'isVideo',
//       'fileUrl',
//       'duration',
//       'themeId',
//       'description',
//       'descriptionRu',
//     ],
//     filterProperties: [
//       'id',
//       'title',
//       'titleRu',
//       'priority',
//       'category',
//       'categoryRu',
//       'section',
//       'sectionRu',
//       'isVideo',
//       'fileUrl',
//       'duration',
//       'themeId',
//     ],
//     properties: {
//       fileUrl: {
//         components: {
//           show: ImageComponent,
//           list: ImageComponent,
//         },
//       },
//       'theme.imageUrl': {
//         components: {
//           show: ImageComponent,
//           list: ImageComponent,
//         },
//       },
//       description: {
//         components: {
//           show: TextComponent,
//         },
//       },
//       descriptionRu: {
//         components: {
//           show: TextComponent,
//         },
//       },
//     },
//   },
// };
