;;
(function(window) {

    function mdAvatar(options) {
        /**
         * from  https://www.google.com/design/spec/style/color.html
         */
        var defaultColor = [
            '#F44336', // red 500
            '#E91E63', // pink 500
            '#9C27B0', // purple 500,
            '#673AB7', // deep purple 500
            '#3F51B5', // indigo 500
            '#2196F3', // blue 500
            '#03A9F4', // light blue 500
            '#00BCD4', // cyan 500
            '#009688', // teal 500
            '#4CAF50', // green 500
            '#8BC34A', // light green 500
            '#CDDC39', // lime 500
            '#FFEB3B', // yellow 500
            '#FFC107', // amber 500
            '#FF9800', // orange 500
            '#FF5722', // deep orange 500
            '#795548', // brown 500
            '#9E9E9E', // grey 500
            '#607D8B', // blue grey 500
        ];

        var defaultOptions = {
            size: 32,
            text: '?',
            textColor: 'white',
            textAlign: 'center',
            textBaseline: 'middle',
            fontFamily: 'sans-serif'
        };

        this.target = options.target;
        this.size = options.size || defaultOptions.size;
        this.text = options.text ? options.text.substring(0, 1) : defaultOptions.text;
        this.textColor = options.textColor || defaultOptions.textColor;
        this.textSize = options.textSize || this.size / 2;
        this.textAlign = options.textAlign || defaultOptions.textAlign;
        this.textBaseline = options.textBaseline || defaultOptions.textBaseline;
        this.fontFamily = options.fontFamily || defaultOptions.fontFamily;
        this.bgColor = options.bgColor || defaultColor[this._getDefaultBgIndex(this.text, defaultColor.length)];

        this.initCanvas();

        this.ctx.clearRect(0, 0, this.size, this.size);
        this.draw();

        return this._canvas;
    }

    mdAvatar.prototype.initCanvas = function() {

        /**
         * check the target is canvas element
         */
        function _isCanvacElement(target) {
            return target instanceof HTMLElement && target.nodeName === 'CANVAS';
        }

        if (!this.target) {
            this._canvas = document.createElement('canvas');
        } else {

            if (_isCanvacElement(this.target)) {
                this._canvas = this.target;
            } else {

                var testTarget = document.getElementById(this.target);

                if (testTarget && _isCanvacElement(testTarget)) {

                    this._canvas = this.target;

                } else {

                    this._canvas = document.createElement('canvas');
                }

            }
        }

        this._canvas.width = this.size;
        this._canvas.height = this.size;
        this.ctx = this._canvas.getContext('2d');
    };

    mdAvatar.prototype.drawCircle = function() {
        var center = this.size / 2;
        var radius = center;

        this.ctx.beginPath();
        this.ctx.arc(center, center, radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fill();
    };

    mdAvatar.prototype.drawText = function() {
        var x = this.size / 2;
        var y = this.size / 2;

        this.ctx.fillStyle = this.textColor;
        this.ctx.font = this.textSize + 'px ' + this.fontFamily;
        this.ctx.textAlign = this.textAlign;
        this.ctx.textBaseline = this.textBaseline;
        this.ctx.fillText(this.text, x, y);
    };

    mdAvatar.prototype.draw = function() {
        this.drawCircle();
        this.drawText();
    };

    mdAvatar.prototype._getDefaultBgIndex = function(text, colorsNumber) {
        var charCode = text.charCodeAt(0);
        return charCode % colorsNumber;
    };

    window.mdAvatar = mdAvatar;

}(window));
