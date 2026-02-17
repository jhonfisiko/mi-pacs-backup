window.config = {
  routerBasename: '/',
  showStudyList: true,
  extensions: [],
  modes: [],
  dataSources: [
    {
      friendlyName: 'Orthanc PACS',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        name: 'orthanc',
        // CAMBIO CLAVE: Usamos el prefijo /orthanc/ que definimos en Nginx
        wadoUriRoot: '/orthanc/wado', 
        qidoRoot: '/orthanc/dicom-web',
        wadoRoot: '/orthanc/dicom-web',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        dicomUploadEnabled: true,
        supportsReject: false,
        lazyLoadStagedViewports: true,
      },
    },
  ],
  defaultDataSourceName: 'dicomweb',
};
