var Utilies;
(function (Utilies) {
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    Utilies.random = random;
    function deleteFromCollection(collection, indexToRemove) {
        delete collection[indexToRemove];
        collection.splice(indexToRemove, 1);
    }
    Utilies.deleteFromCollection = deleteFromCollection;

    function copy(newObject, oldObject) {

        for( member in oldObject )
        {
            // if the member is itself an object, then we most also call copy on that
            if( typeof(oldObject[member]) == "object" ){
                    newObject[member] = std.copy(newObject[member],oldObject[member])
            }else{
                // if its a primative member just assign it
                newObject[member] = oldObject[member];
            }           
        }

        return newObject;
    };
    Utilies.copy = copy;

})(Utilies || (Utilies = {}));

var Logger;
(function (Logger) {
    Logger.loggingActive = true;
    function log(message) {
        if(Logger.loggingActive) {
            console.info(message);
        }
    }
    Logger.log = log;
    function debug(message) {
        if(Logger.loggingActive) {
            console.log(message);
        }
    }
    Logger.debug = debug;
    function error(message) {
        if(Logger.loggingActive) {
            console.error(message);
        }
    }
    Logger.error = error;
})(Logger || (Logger = {}));

var keyboard;
(function (keyboard) {
    var keys = [];
    (function () {
        $(window).keydown(function (e) {
            keys[e.which] = true;
        });
        $(window).keyup(function (e) {
            delete keys[e.which];
        });
    })();
    function isKeyDown(keyCode) {
        for(var key in keys) {
            if(key == keyCode) {
                return true;
            }
        }
        return false;
    }
    keyboard.isKeyDown = isKeyDown;
})(keyboard || (keyboard = {}));

