(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/tasks/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      createTaskModal: false,
      form: {
        task: '',
        developer_id: ''
      },
      editForm: {
        task: '',
        developer_id: ''
      },
      editTaskModal: false,
      statusForm: {
        status_id: '',
        id: ''
      },
      changeStatusModal: false
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    tasks: 'tasks/tasks',
    statuses: 'tasks/statuses',
    token: 'auth/token',
    user: 'auth/user',
    allDevelopers: 'developers/allDevelopers'
  })),
  mounted: function mounted() {
    this.$store.dispatch('tasks/fetchTasks');
    this.$store.dispatch('tasks/fetchStatuses');
    this.$store.dispatch('auth/fetchUser');
    this.$store.dispatch('developers/fetchAllDevelopers');
  },
  watch: {},
  methods: {
    openCreateModal: function openCreateModal() {
      this.createTaskModal = true;
      this.form.task = '';
      this.form.developer_id = '';
    },
    createTask: function createTask() {
      this.$store.dispatch('tasks/fetchAddTasks', this.form);
      this.createTaskModal = false;
    },
    deleteTask: function deleteTask(id) {
      this.$store.dispatch('tasks/fetchDeleteTasks', id);
    },
    editTaskOpenModal: function editTaskOpenModal(data) {
      this.editForm.task = data.task;
      this.editForm.developer_id = data.developer_id;
      this.editForm.id = data.id;
      this.editTaskModal = true;
    },
    editTask: function editTask() {
      this.$store.dispatch('tasks/fetchEditTasks', this.editForm);
      this.editTaskModal = false;
    },
    changeStatusOpenModal: function changeStatusOpenModal(data) {
      this.statusForm.status_id = data.status_id;
      this.statusForm.id = data.id;
      this.changeStatusModal = true;
    },
    changeStatus: function changeStatus() {
      this.$store.dispatch('tasks/fetchChangeStatus', this.statusForm);
      this.changeStatusModal = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tasks-container {\n  padding: 20px;\n}\n.tasks-container .tasks__header {\n  display: flex;\n  justify-content: center;\n}\n.tasks-container .tasks__buttons--create {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n}\n.tasks-container .tasks__buttons--create button {\n  background-color: darkgreen;\n  color: white;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.button--change {\n  background-color: brown;\n  color: white;\n}\n.modal-content {\n  display: flex;\n  flex-direction: column;\n  border: none;\n}\n.modal-content .modal__input--label {\n  margin-bottom: 20px;\n  width: 100%;\n}\n.modal-content .modal-content__footer {\n  border: none;\n  margin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n.modal-content .modal-content__footer .btn--create {\n  background-color: #277a53;\n  color: white;\n}\n.modal-content .modal-content__footer .btn--cancel {\n  background-color: crimson;\n  color: white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/index.vue?vue&type=template&id=4db8e7b8&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/tasks/index.vue?vue&type=template&id=4db8e7b8& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "tasks-container tasks" },
    [
      _c("div", [
        _c("div", { staticClass: "portlet" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "tasks__buttons--create" }, [
            _vm.user && _vm.user.role && _vm.user.role.name == "Manager"
              ? _c(
                  "button",
                  { staticClass: "btn", on: { click: _vm.openCreateModal } },
                  [_vm._v("Create")]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "portlet-body" }, [
            _c("div", { staticClass: "table-scrollable" }, [
              _c(
                "table",
                {
                  staticClass:
                    "table table-striped table-bordered table-advance table-hover"
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.tasks, function(task, index) {
                      return _c("tr", { key: index }, [
                        _c("td", { staticClass: "highlight" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(task.task) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "hidden-xs" }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                task.status && task.status.name
                                  ? task.status.name
                                  : ""
                              ) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                task.developer && task.developer.name
                                  ? task.developer.name
                                  : ""
                              ) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(
                                task.manager && task.manager.name
                                  ? task.manager.name
                                  : ""
                              ) +
                              "\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm.user &&
                          _vm.user.role &&
                          _vm.user.role.name == "Manager"
                            ? _c("div", [
                                _c(
                                  "span",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.editTaskOpenModal(task)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-edit cursor-pointer"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteTask(task.id)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-trash cursor-pointer"
                                    })
                                  ]
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.user &&
                          _vm.user.role &&
                          _vm.user.role.name == "Developer"
                            ? _c(
                                "button",
                                {
                                  staticClass: "button--change btn",
                                  on: {
                                    click: function($event) {
                                      return _vm.changeStatusOpenModal(task)
                                    }
                                  }
                                },
                                [_vm._v("Change status")]
                              )
                            : _vm._e()
                        ])
                      ])
                    }),
                    0
                  )
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Create task", "hide-footer": "" },
          model: {
            value: _vm.createTaskModal,
            callback: function($$v) {
              _vm.createTaskModal = $$v
            },
            expression: "createTaskModal"
          }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-content__body" }, [
              _c(
                "label",
                { staticClass: "modal__input--label" },
                [
                  _vm._v("\n                     Task\n                     "),
                  _c("b-form-textarea", {
                    attrs: { placeholder: "type task" },
                    model: {
                      value: _vm.form.task,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "task", $$v)
                      },
                      expression: "form.task"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "modal__input--label" },
                [
                  _vm._v(
                    "\n                     Developer\n                    "
                  ),
                  _c(
                    "b-form-select",
                    {
                      attrs: { placeholder: "Developer" },
                      model: {
                        value: _vm.form.developer_id,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "developer_id", $$v)
                        },
                        expression: "form.developer_id"
                      }
                    },
                    [
                      _c("b-form-select-option", { attrs: { value: null } }),
                      _vm._v(" "),
                      _vm._l(_vm.allDevelopers, function(developer, index) {
                        return [
                          _c(
                            "b-form-select-option",
                            { key: index, attrs: { value: developer.id } },
                            [_vm._v(_vm._s(developer.name))]
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-content__footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn--create",
                  attrs: { disabled: _vm.form.task == "" ? true : false },
                  on: { click: _vm.createTask }
                },
                [_vm._v("Create")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn--cancel",
                  on: {
                    click: function($event) {
                      _vm.createTask = false
                    }
                  }
                },
                [_vm._v("Close")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Update task", "hide-footer": "" },
          model: {
            value: _vm.editTaskModal,
            callback: function($$v) {
              _vm.editTaskModal = $$v
            },
            expression: "editTaskModal"
          }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-content__body" }, [
              _c(
                "label",
                { staticClass: "modal__input--label" },
                [
                  _vm._v("\n                     Task\n                     "),
                  _c("b-form-textarea", {
                    attrs: { placeholder: "type task" },
                    model: {
                      value: _vm.editForm.task,
                      callback: function($$v) {
                        _vm.$set(_vm.editForm, "task", $$v)
                      },
                      expression: "editForm.task"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "label",
                { staticClass: "modal__input--label" },
                [
                  _vm._v(
                    "\n                     Developer\n                    "
                  ),
                  _c(
                    "b-form-select",
                    {
                      attrs: { placeholder: "Developer" },
                      model: {
                        value: _vm.editForm.developer_id,
                        callback: function($$v) {
                          _vm.$set(_vm.editForm, "developer_id", $$v)
                        },
                        expression: "editForm.developer_id"
                      }
                    },
                    [
                      _c("b-form-select-option", { attrs: { value: null } }),
                      _vm._v(" "),
                      _vm._l(_vm.allDevelopers, function(developer, index) {
                        return [
                          _c(
                            "b-form-select-option",
                            { key: index, attrs: { value: developer.id } },
                            [_vm._v(_vm._s(developer.name))]
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-content__footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn--create",
                  attrs: { disabled: _vm.editForm.task == "" ? true : false },
                  on: { click: _vm.editTask }
                },
                [_vm._v("Update")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn--cancel",
                  on: {
                    click: function($event) {
                      _vm.editTaskModal = false
                    }
                  }
                },
                [_vm._v("Close")]
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Create task", "hide-footer": "" },
          model: {
            value: _vm.changeStatusModal,
            callback: function($$v) {
              _vm.changeStatusModal = $$v
            },
            expression: "changeStatusModal"
          }
        },
        [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-content__body" }, [
              _c(
                "label",
                { staticClass: "modal__input--label" },
                [
                  _vm._v(
                    "\n                     Statuses\n                    "
                  ),
                  _c(
                    "b-form-select",
                    {
                      attrs: { placeholder: "Developer" },
                      model: {
                        value: _vm.statusForm.status_id,
                        callback: function($$v) {
                          _vm.$set(_vm.statusForm, "status_id", $$v)
                        },
                        expression: "statusForm.status_id"
                      }
                    },
                    [
                      _vm._l(_vm.statuses, function(status, index) {
                        return [
                          _c(
                            "b-form-select-option",
                            { key: index, attrs: { value: status.id } },
                            [_vm._v(_vm._s(status.name))]
                          )
                        ]
                      })
                    ],
                    2
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "modal-content__footer" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn--create",
                  on: { click: _vm.changeStatus }
                },
                [_vm._v("Change")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn--cancel",
                  on: {
                    click: function($event) {
                      _vm.changeStatusModal = false
                    }
                  }
                },
                [_vm._v("Close")]
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tasks__header" }, [
      _c("h3", [_vm._v(" Tasks")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [
          _vm._v(
            "\n                                Task\n                            "
          )
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "hidden-xs" }, [
          _vm._v(
            "\n                                status\n                            "
          )
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                                Developer\n                            "
          )
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                                Manager\n                            "
          )
        ]),
        _vm._v(" "),
        _c("th", [
          _vm._v(
            "\n                                Actions\n                            "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/tasks/index.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/tasks/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4db8e7b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4db8e7b8& */ "./resources/js/pages/tasks/index.vue?vue&type=template&id=4db8e7b8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/tasks/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4db8e7b8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4db8e7b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/tasks/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/tasks/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/tasks/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/pages/tasks/index.vue?vue&type=template&id=4db8e7b8&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/tasks/index.vue?vue&type=template&id=4db8e7b8& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4db8e7b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4db8e7b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/tasks/index.vue?vue&type=template&id=4db8e7b8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4db8e7b8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4db8e7b8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);