/*
 * Copyright (c) 2016-2018 Ali Shakiba http://shakiba.me/planck.js
 * Copyright (c) 2006-2011 Erin Catto  http://www.box2d.org
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

var _DEBUG = typeof DEBUG === 'undefined' ? false : DEBUG;
var _ASSERT = typeof ASSERT === 'undefined' ? false : ASSERT;

module.exports = BoxShape;

var common = require('../util/common');
var create = require('../util/create');
var PolygonShape = require('./PolygonShape');

BoxShape._super = PolygonShape;
BoxShape.prototype = create(BoxShape._super.prototype);

BoxShape.TYPE = 'polygon';

/**
 * A rectangle polygon which extend PolygonShape.
 */
function BoxShape(hx, hy, center, angle) {
  if (!(this instanceof BoxShape)) {
    return new BoxShape(hx, hy, center, angle);
  }

  BoxShape._super.call(this);

  this._setAsBox(hx, hy, center, angle);
}

