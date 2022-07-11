/// <reference path="./node_modules/tns-core-modules/tns-core-modules.d.ts" /> Needed for autocompletion and compilation.
/// <reference path="node_modules/tns-platform-declarations/android.d.ts" /> Needed for Intellisense native platform api's
/// <reference path="node_modules/tns-platform-declarations/ios.d.ts" /> Needed for Intellisense native platform api's
/// <reference path="./typings/sqlite.d.ts" /> Needed for Intellisense native platform api's

declare namespace NodeJS {
    interface Global {
        environment: string;
    }
}