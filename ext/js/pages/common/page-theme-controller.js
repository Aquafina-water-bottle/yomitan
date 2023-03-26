/*
 * Copyright (C) 2023  Yomitan Authors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/* globals
 * ThemeController
 */

class PageThemeController {
    constructor(settingsController, themeController) {
        this._settingsController = settingsController;
        this._themeController = themeController;
    }

    async prepare() {
        console.log("PageThemeController.prepare()");
        this._settingsController.on('optionsChanged', this._onOptionsChanged.bind(this));
    }

    // Private

    _onOptionsChanged({options}) {
        console.log("PageThemeController._onOptionsChanged({options})");
        this._setTheme(options);
    }

    _setTheme(options) {
        const {general} = options;
        const {popupTheme} = general;
        this._themeController.theme = popupTheme;
        this._themeController.outerTheme = general.popupOuterTheme;
        this._themeController.updateTheme();
    }
}
