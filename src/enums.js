export const ROUTES_ID = {
    DASHBOARD: "DASHBOARD",
    CREATE_WH: "CREATE_WH",
    EDIT_WH: "EDIT_WH",
    WH_LOCATIONS: "WH_LOCATIONS",
    CREATE_ASSET: "CREATE_ASSET",
    EDIT_ASSET: "EDIT_ASSET",
    ASSET: "ASSET",
    CREATE_ASSET_TYPE: "CREATE_ASSET_TYPE",
    EDIT_ASSET_TYPE: "EDIT_ASSET_TYPE",
    ASSET_TYPE: "ASSET_TYPE",
    CREATE_SUPPLIER: "CREATE_SUPPLIER",
    EDIT_SUPPLIER: "EDIT_SUPPLIER",
    SUPPLIER: "SUPPLIER",
    CREATE_MANUFACTURE: "CREATE_MANUFACTURE",
    EDIT_MANUFACTURE: "EDIT_MANUFACTURE",
    MANUFACTURE: "MANUFACTURE",
    CREATE_ORG: "CREATE_ORG",
    EDIT_ORG: "EDIT_ORG",
    ORG: "ORG",
    SETTINGS: "SETTINGS",
    PROFILE: "PROFILE",
    LOGIN: "LOGIN",
    RESET_PASSWORD: "RESET_PASSWORD",
    SIGN_IN: "SIGN_IN",
    OTP_PASS: "OTP_PASS",
    FORGET_PASS: "FORGET_PASS",
    SET_NOTIFICATION: 'SET_NOTIFICATION',
    NOTIFICATION: "NOTIFICATION",
    WL_FIELDS: "WL_FIELDS",
    WKLG_FIELDS: "WKLG_FIELDS",
    CREATE_WKLG: "CREATE_WKLG",
    CREW_WKLG: "CREW_WKLG",
    CREATE_CWKLG: "CREATE_CWKLG",
    EDIT_CWKLG: "EDIT_CWKLG",
    VENDOR_WORK_LOCATIONS_LIST: "VENDOR_WORK_LOCATIONS_LIST",
    VENDOR_WORK_LOCATIONS: "VENDOR_WORK_LOCATIONS",
    VENDOR_WKLG: "VENDOR_WKLG",
    CREATE_VWKLG: "CREATE_VWKLG",
    EDIT_VWKLG: "EDIT_VWKLG",
    UPDATE_WKLG: "UPDATE_WKLG",
    WL_FIELDS_CREATE: "WL_FIELDS_CREATE",
    WL_FIELDS_EDIT: "WL_FIELDS_EDIT",
    WORK_LOCATION: "WORK_LOCATION",
    CREATE_WORK: "CREATE_WORK",
    EDIT_WORK: "EDIT_WORK",
    PROJECT: "PROJECT",
    CREATE_PROJECT: "CREATE_PROJECT",
    EDIT_PROJECT: "EDIT_PROJECT",
    CREATE_TEMPLATE: "CREATE_TEMPLATE",
    EDIT_TEMPLATE: "EDIT_TEMPLATE",
    CREATE_A_TEMPLATE: "CREATE_A_TEMPLATE",
    EDIT_A_TEMPLATE: "EDIT_A_TEMPLATE",
    ACTIVITY_TEMPLATES: "ACTIVITY_TEMPLATES",
    ADMIN_USER: "ADMIN_USER",
    CREATE_ADMIN: "CREATE_ADMIN",
    EDIT_ADMIN: "EDIT_ADMIN",
    MOBILE_USER: "MOBILE_USER",
    CREATE_MOBILE_USER: "CREATE_MOBILE_USER",
    EDIT_MOBILE_USER: "EDIT_MOBILE_USER",
    CREW_USER: "CREW_USER",
    CREATE_CREW: "CREATE_CREW",
    EDIT_CREW: "EDIT_CREW",
    VENDOR_USER: "VENDOR_USER",
    CREATE_VENDOR: "CREATE_VENDOR",
    EDIT_VENDOR: "EDIT_VENDOR",
    WORKFLOW_TEMPLATES: "WORKFLOW_TEMPLATES",
    WORK_ORDER: "WORK_ORDER",
    WO_LIST: "WO_LIST",
    WO_MAP: "WO_MAP",
    WO_SWIM_LANE: "WO_SWIM_LANE",
    ASSIGN_WO_SL: "ASSIGN_WO_SL",
    CREATE_ORDER: "CREATE_ORDER",
    EDIT_ORDER: "EDIT_ORDER",
    VIEW_ORDER: "VIEW_ORDER",
    ROLES_PERMISSIONS: "ROLES_PERMISSIONS",
    ASSIGN_WORK_ORDER: "ASSIGN_WORK_ORDER",
    BULK_UPLOAD_HISTORY: "BULK_UPLOAD_HISTORY",
};

export const accessKeys = [
    {
        key: ROUTES_ID.ASSET,
        create: {id: ROUTES_ID.CREATE_ASSET, key: "Create Asset"},
        update: {id: ROUTES_ID.EDIT_ASSET, key: "Update Asset"},
        delete: "Delete Asset",
        view: {id: [ROUTES_ID.ASSET], key: "View Asset"}
    },
    {
        key: ROUTES_ID.ASSET_TYPE,
        create: {id: ROUTES_ID.CREATE_ASSET_TYPE, key: "Create Asset"},
        update: {id: ROUTES_ID.EDIT_ASSET_TYPE, key: "Update Asset"},
        delete: "Delete Asset",
        view: {id: [ROUTES_ID.ASSET_TYPE], key: "View Asset"}
    },
    {
        key: ROUTES_ID.SUPPLIER,
        create: {id: ROUTES_ID.CREATE_SUPPLIER, key: "Create Asset"},
        update: {id: ROUTES_ID.EDIT_SUPPLIER, key: "Update Asset"},
        delete: "Delete Asset",
        view: {id: [ROUTES_ID.SUPPLIER], key: "View Asset"}
    },
    {
        key: ROUTES_ID.MANUFACTURE,
        create: {id: ROUTES_ID.CREATE_MANUFACTURE, key: "Create Asset"},
        update: {id: ROUTES_ID.EDIT_MANUFACTURE, key: "Update Asset"},
        delete: "Delete Asset",
        view: {id: [ROUTES_ID.MANUFACTURE], key: "View Asset"}
    },
    {
        key: ROUTES_ID.ORG,
        create: {id: ROUTES_ID.CREATE_ORG, key: "Create Organisation"},
        update: {id: ROUTES_ID.EDIT_ORG, key: "Update Organisation"},
        delete: "Delete Organisation",
        view: {id: [ROUTES_ID.ORG], key: "View Organisation"}
    },
    {
        key: ROUTES_ID.WORK_LOCATION,
        create: {id: ROUTES_ID.CREATE_WORK, key: "Create Location"},
        update: {id: ROUTES_ID.EDIT_WORK, key: "Update Location"},
        delete: "Delete Location",
        view: {id: [ROUTES_ID.WORK_LOCATION], key: "View Location"}
    },
    {
        key: ROUTES_ID.WKLG_FIELDS,
        create: {id: ROUTES_ID.CREATE_WKLG, key: "Create Location"},
        update: {id: ROUTES_ID.UPDATE_WKLG, key: "Update Location"},
        delete: "Delete Location",
        view: {id: [ROUTES_ID.WKLG_FIELDS], key: "View Location"}
    },
    {
        key: ROUTES_ID.WH_LOCATIONS,
        create: {id: ROUTES_ID.CREATE_WH, key: "Create Warehouse"},
        update: {id: ROUTES_ID.EDIT_WH, key: "Update Warehouse"},
        delete: "Delete Warehouse",
        view: {id: [ROUTES_ID.WH_LOCATIONS], key: "View Warehouse"}
    },
    {
        key: ROUTES_ID.VENDOR_USER,
        create: {id: ROUTES_ID.CREATE_VENDOR, key: "Create Vendor"},
        update: {id: ROUTES_ID.EDIT_VENDOR, key: "Update Vendor"},
        delete: "Delete Vendor",
        view: {id: [ROUTES_ID.VENDOR_USER], key: "View Vendor"}
    },
    {
        key: ROUTES_ID.CREW_USER,
        create: {id: ROUTES_ID.CREATE_CREW, key: "Create Crew"},
        update: {id: ROUTES_ID.EDIT_CREW, key: "Update Crew"},
        delete: "Delete Crew",
        view: {id: [ROUTES_ID.CREW_USER], key: "View Crew"}
    },
    {
        key: ROUTES_ID.MOBILE_USER,
        create: {id: ROUTES_ID.CREATE_MOBILE_USER, key: "Create Workforce"},
        update: {id: ROUTES_ID.EDIT_MOBILE_USER, key: "Update Workforce"},
        delete: "Delete Workforce",
        view: {id: [ROUTES_ID.MOBILE_USER], key: "View Workforce"}
    },
    {
        key: ROUTES_ID.ROLES_PERMISSIONS,
        create: {id: ROUTES_ID, key: "Create Role"},
        update: {id: ROUTES_ID, key: "Update Role"},
        delete: "Delete Role",
        view: {id: [ROUTES_ID.ROLES_PERMISSIONS], key: "View Role"}
    },
    {
        key: ROUTES_ID.ROLES_PERMISSIONS,
        create: {id: ROUTES_ID, key: "Create Permission Group"},
        update: {id: ROUTES_ID, key: "Update Permission Group"},
        delete: "Delete Permission Group",
        view: {id: [ROUTES_ID.ROLES_PERMISSIONS], key: "View Permission Group"}
    },
    {
        key: ROUTES_ID.ADMIN_USER,
        create: {id: ROUTES_ID.CREATE_ADMIN, key: "Create User"},
        update: {id: ROUTES_ID.EDIT_ADMIN, key: "Update User"},
        delete: "Delete User",
        view: {id: [ROUTES_ID.ADMIN_USER], key: "View User"}
    },
    {
        key: ROUTES_ID.WORK_ORDER,
        create: {id: ROUTES_ID.CREATE_ORDER, key: "Create Work Orders"},
        update: {id: ROUTES_ID.EDIT_ORDER, key: "Update Work Orders"},
        delete: "Delete Work Orders",
        view: {id: [ROUTES_ID.WO_LIST, ROUTES_ID.VIEW_ORDER], key: "View Work Orders"}
    },
    {
        key: ROUTES_ID.WORKFLOW_TEMPLATES,
        create: {id: ROUTES_ID.CREATE_TEMPLATE, key: "Create Work Orders"},
        update: {id: ROUTES_ID.EDIT_TEMPLATE, key: "Update Work Orders"},
        delete: "Delete Work Orders",
        view: {id: [ROUTES_ID.WORKFLOW_TEMPLATES], key: "View Work Orders"}
    },
    {
        key: ROUTES_ID.PROJECT,
        create: {id: ROUTES_ID.CREATE_PROJECT, key: "Create Project"},
        update: {id: ROUTES_ID.EDIT_PROJECT, key: "Update Project"},
        delete: "Delete Project",
        view: {id: [ROUTES_ID.PROJECT], key: "View Project"}
    },
    {
        key: ROUTES_ID.WL_FIELDS,
        create: {id: ROUTES_ID.WL_FIELDS_CREATE, key: "Create Location"},
        update: {id: ROUTES_ID.WL_FIELDS_EDIT, key: "Update Location"},
        delete: "Delete Location",
        view: {id: [ROUTES_ID.WL_FIELDS], key: "View Location"}
    }
];
