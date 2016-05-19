/**
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(global) {

    // map tells the System loader where to look for things
    var map = {
        'ng2-uploader': 'node_modules/ng2-uploader',
        'ng2-alfresco-core': 'node_modules/ng2-alfresco-core',
        'ng2-alfresco-datatable': 'node_modules/ng2-alfresco-datatable/dist',
        'ng2-alfresco-documentlist': 'node_modules/ng2-alfresco-documentlist/dist',
        'ng2-alfresco-login': 'node_modules/ng2-alfresco-login',
        'ng2-alfresco-upload': 'node_modules/ng2-alfresco-upload/dist',
        'ng2-translate': 'node_modules/ng2-translate',
        'rxjs': 'node_modules/rxjs'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        app: {
            format: 'register',
            defaultExtension: 'js'
        },
        'ng2-uploader': {defaultExtension: 'js'},
        'ng2-alfresco-core': {defaultExtension: 'js'},
        'ng2-alfresco-documentlist': {defaultExtension: 'js'},
        'ng2-alfresco-login': {defaultExtension: 'js'},
        'ng2-alfresco-upload': {defaultExtension: 'js'},
        'ng2-alfresco-datatable': {defaultExtension: 'js'},
        'ng2-translate': {defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'}
    };

    var config = {
        map: map,
        packages: packages
    };

    System.config(config);

})(this);