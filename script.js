var app = angular.module("app", [])

app.controller("mainController", function ($scope) {
    $scope.treeData = [
        {
            name: "e2e",
            children: [
                {
                    name: "e2e.script.tests.js"
                }
            ],
            opened: false
        },
        {
            name: "node_modules",
            children: [
                {
                    name: "e2e.script.tests.js"
                }
            ],
            opened: false
        },
        {
            name: "src",
            children: [
                {
                    name: "app",
                    children: [
                        {
                            name: "treeview",
                            children: [
                                { name: "treeview.component.css" },
                                { name: "treeview.component.html" },
                                { name: "treeview.component.spec.ts" },
                                { name: "treeview.component.ts" },
                                { name: "treeview.module.ts" }
                            ],
                            opened: true
                        },
                        { name: "app.component.css" },
                        { name: "app.component.html" },
                        { name: "app.component.spec.ts" },
                        { name: "app.component.ts" },
                        { name: "app.module.ts" }
                    ],
                    opened: true
                }
            ]
        }
    ]

    $scope.rotate = {
        true: "rotate"
    }
})
