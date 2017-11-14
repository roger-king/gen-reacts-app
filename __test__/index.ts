export const modulePath = (module: string): string => {
    const root: string = './../src/app';

    let path: string;

    switch (module.split('/')[0]) {
        case 'components':
            path.concat('components', '/');
            break;
        case 'containers':
            path.concat('containers', '/');
            break;
        case 'state':
            path.concat('state', '/');
            break;
        default:
            break;
    }

    return path;
};

