(function () {
  'use strict';

  angular.module('fs')
    .factory('diskHelper', function() {
      return {
        
      };
    })
    .factory('diskFileSystem', function ($q) {
      /**
       * Validates a path.
       * @param {string} path
       * @return {Object}
       */
      function validatePath(path) {
        if (path.indexOf('/') !== 0) {
          return {valid: false, reason: 'Path should start with "/"'};
        }
        return {valid: true};
      }

      return {
        supportsFolders: true,

        /**
         * Returns a promise that contains the list the Entries that are contained starting from that fullpath.
         *
         * If the method is applied to a fullpath of type file an Entry with that data is fulfilled in the promise.
         */
        directory: function (path) {
          var deferred = $q.defer();
          var isValidPath = validatePath(path);

          if (!isValidPath.valid) {
            deferred.reject(isValidPath.reason);
            return deferred.promise;
          }

          // TODO

          return deferred.promise;
        },

        /**
         * Saves content to a given file to the given fullpath. It creates the necessary folders if needed.
         *
         * Returns a promise that fulfills on success or rejects on fail.
         */
        save: function (fullpath, content) {
          var deferred = $q.defer();

          return deferred.promise;
        },

        /**
         * Creates a folder. Creates all the required previous folder levels if needed.
         *
         * Returns a promise that fulfills on success or rejects on fail.
         */
        createFolder: function (fullpath) {
          throw 'Not implemented: FileSystem createFolder invoked with [fullpath=' + fullpath + ']';
        },

        /**
         * Returns a promise that contains the content of the file found at fullpath. Fails if the fullpath does not exist or is a folder.
         */
        load: function (fullpath) {
          throw 'Not implemented: FileSystem load invoked with [fullpath=' + fullpath + ']';
        },

        /**
         * Removes a fullpath and all the nested children of the hierarchy.
         *
         * Returns a promise that fulfills on success or rejects on fail.
         */
        remove: function (fullpath) {
          throw 'Not implemented: FileSystem remove invoked with [fullpath=' + fullpath + ']';
        },

        /**
         * Renames a file or folder. If the destination is a different folder
         * it effectively moves the item, preserving the tree if it's a folder.
         *
         * Returns a promise that fulfills on success or rejects on fail.
         */
        rename: function (source, destination) {
          throw 'Not implemented: FileSystem rename invoked with [source=' + source + '] and [destination=' + destination + ']';
        }
      };
    });
})();
