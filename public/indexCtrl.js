angular.module('sampleSchema', ['ngSanitize','schemaForm'])
    .controller('formCtrl', function ($scope) {
        $scope.name = "hi",
            $scope.schema = {
                type: "object",
                properties: {
                    name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
                    title: {
                        type: "string",
                        enum: ['dr', 'jr', 'sir', 'mrs', 'mr', 'NaN', 'dj']
                    }
                }
            };

        $scope.form = [
            "*",
            {
                type: "submit",
                title: "Save"
            }
        ];

        $scope.model = {};
    });