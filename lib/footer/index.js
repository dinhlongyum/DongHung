const lastNavFMapping = new MappingListener({
    selector: '.dh-footer .last-nav',
    mobileWrapper: '.dh-footer .top-nav',
    mobileMethod: 'prependTo',
    desktopWrapper: '.dh-footer .top-nav',
    desktopMethod: 'appendTo',
    breakpoint: 992,
}).watch()