export default {
  'GENERAL': {
    'MAIN-TITLE': 'Flowable编辑器',
    'NAVIGATION': {
      'PROCESSES': '流程',
      'CASEMODELS': 'Case模型',
      'FORMS': '表单',
      'DECISION-TABLES': '决策表',
      'APPS': '应用程序'
    },
    'TITLE': {
      'SELECT-GROUP': '选择组',
      'MATCHING-GROUPS': '匹配组',
      'FILTER': '过滤',
      'HISTORY': '历史'
    },
    'ACTION': {
      'LOGOUT': '退出',
      'RETURN-TO-LIST': '显示所有定义',
      'CANCEL': '取消',
      'CLOSE': '关闭',
      'EDIT': '编辑',
      'SAVE': '保存',
      'OPEN': '打开',
      'OK': 'Ok',
      'CONFIRM': '确认',
      'CONFIRM-AND-CLOSE': '确认并且关闭',
      'NEW-FORM': '新表单',
      'CREATE-FORM': '创建表单',
      'NEW-DECISION-TABLE': '新决策表',
      'CREATE-DECISION-TABLE': '创建决策表'
    },
    'MESSAGE': {
      'SELECT-GROUP-HELP': '使用 &uparrow; 和 &downarrow; 选择并按回车确认',
      'PEOPLE-NO-MATCHING-RESULTS': '没有找到匹配的用户',
      'GROUP-NO-MATCHING-RESULTS': '没有找到匹配的组',
      'GROUP-SOURCE-TYPE': '组源',
      'GROUP-SOURCE-SEARCH-OPTION': '组搜索',
      'GROUP-SOURCE-FIELD-OPTION': '表单字段'
    }
  },

  'EDITOR': {
    'POPUP': {
      'UNSAVED-CHANGES': {
        'TITLE': '您有未保存的更改',
        'DESCRIPTION': '您想如何处理未保存的更改?',
        'ACTION': {
          'SAVE': '保存更改',
          'DISCARD': '放弃更改',
          'CONTINUE': '继续编辑'
        }
      }
    }
  },

  'PROCESS-LIST': {
    'TITLE': '业务流程模型',
    'SEARCH-PLACEHOLDER': '搜索',
    'ACTION': {
      'CREATE': '创建流程',
      'IMPORT': '导入流程'
    },

    'FILTER': {
      'PROCESSES': '流程模型',
      'PROCESSES-COUNT': '一共有 {total}个流程模型',
      'PROCESSES-ONE': '有一个流程模型',
      'PROCESSES-EMPTY': '目前还没有创建流程模型。您可以设计流程模型、用户表单，然后将它们捆绑到app中。第一步是创建流程模型:',
      'PROCESSES-BPMN-HINT': '使用BPMN可视化编辑器创建BPMN模型.',
      'PROCESSES-BPMN-IMPORT-HINT': '还可以导入现有的BPMN模型。',
      'FILTER-TEXT': ', 匹配 "{filterText}"',
      'FILTER-TEXT-EMPTY': '没有匹配到流程模型 "{filterText}"',
      'RECENT': '最近',
      'RECENT-COUNT': '{total} 最近使用的模型',
      'RECENT-ONE': '最近使用的模型',
      'RECENT-EMPTY': '最近没有使用模型'
    },

    'SORT': {
      'MODIFIED-ASC': '按照修改时间升序',
      'MODIFIED-DESC': '按照修改时间降序',
      'NAME-ASC': '按照名称升序',
      'NAME-DESC': '按照名称降序'
    }
  },

  'CASE-LIST': {
    'TITLE': 'Case模型',
    'SEARCH-PLACEHOLDER': '搜索',
    'ACTION': {
      'CREATE': '创建Case',
      'IMPORT': '导入Case'
    },

    'FILTER': {
      'CASES': 'Case 模型',
      'CASES-COUNT': '一共有 {total}个 case 模型',
      'CASES-ONE': '有一个case模型',
      'CASES-EMPTY': '目前还没有创建case模型。您可以设计实例模型、用户表单，然后将它们捆绑到app应用程序定义中。第一步是创建一个case模型。:',
      'CASES-CMMN-HINT': '使用CMMN可视化编辑器创建CMMN模型.',
      'CASES-CMMN-IMPORT-HINT': '还可以导入现有CMMN模型。',
      'FILTER-TEXT': ', 匹配 "{filterText}"',
      'FILTER-TEXT-EMPTY': '没有匹配到case模型 "{filterText}"',
      'RECENT': '最近',
      'RECENT-COUNT': '{total} 最近使用的模型',
      'RECENT-ONE': '最近使用的模型',
      'RECENT-EMPTY': '最近没有使用模型'
    },

    'SORT': {
      'MODIFIED-ASC': '按照修改时间升序',
      'MODIFIED-DESC': '按照修改时间降序',
      'NAME-ASC': '按照名称升序',
      'NAME-DESC': '按照名称降序'
    }
  },

  'FORMS-LIST': {
    'TITLE': '表单',
    'SEARCH-PLACEHOLDER': '搜索',
    'ACTION': {
      'CREATE': '创建表单',
      'CREATE-INLINE': '现在创建一个新表单!',
      'SHOW-MORE': '显示更多...'
    },

    'FILTER': {
      'FORMS': '表单',
      'FORMS-COUNT': '一共有{total} 个表单',
      'FORMS-ONE': '有一个表单',
      'FORMS-EMPTY': '没有表单。若要添加一个，请单击创建表单 ',
      'FILTER-TEXT': ', 匹配 "{filterText}"',
      'FILTER-TEXT-EMPTY': '没有匹配到表单 "{filterText}"'
    },

    'SORT': {
      'MODIFIED-ASC': '按照修改时间升序',
      'MODIFIED-DESC': '按照修改时间降序',
      'NAME-ASC': '按照名称升序',
      'NAME-DESC': '按照名称降序'
    }
  },

  'DECISION-TABLES-LIST': {
    'TITLE': '决策表',
    'SEARCH-PLACEHOLDER': '搜索',
    'ACTION': {
      'CREATE': '创建决策表',
      'IMPORT': '导入决策表',
      'CREATE-INLINE': '现在创建一个新的决策表!',
      'SHOW-MORE': '显示更多...'
    },

    'FILTER': {
      'DECISION-TABLES': '决策表',
      'DECISION-TABLES-COUNT': '一共有 {total} 个决策表',
      'DECISION-TABLES-ONE': '有一个决策表',
      'DECISION-TABLES-EMPTY': '没有决策表。若要添加一个，请单击创建决策表 ',
      'FILTER-TEXT': ', 匹配 "{filterText}"',
      'FILTER-TEXT-EMPTY': '没有匹配到决策表 "{filterText}"'
    },

    'SORT': {
      'MODIFIED-ASC': '按照修改时间升序',
      'MODIFIED-DESC': '按照修改时间降序',
      'NAME-ASC': '按照名称升序',
      'NAME-DESC': '按照名称降序'
    }
  },

  'APPS-LIST': {
    'TITLE': '应用程序定义',
    'SEARCH-PLACEHOLDER': '搜索',
    'ACTION': {
      'CREATE': '创建应用程序',
      'IMPORT': '导入应用程序',
      'SHOW-MORE': '显示更多...'
    },

    'FILTER': {
      'APPS': '应用程序定义',
      'APPS-COUNT': '一共有 {total}个应用程序定义',
      'APPS-ONE': '有一个app定义',
      'APPS-EMPTY': '没有应用程序定义。若要添加一个，请单击创建应用程序定义',
      'FILTER-TEXT': ', 匹配 "{filterText}"',
      'FILTER-TEXT-EMPTY': '没有匹配到应用程序定义  "{filterText}"',

      'NO-APPS': ' 您可以通过发布一批流程模型来创建应用程序定义',
      'NO-APPS-CALL-TO-ACTION': '现在可以创建一个应用程序定义 ',
      'NO-APPS-NOTE': '当你准备好使用它时，记得要发布它。'
    },

    'SORT': {
      'MODIFIED-ASC': '按照修改时间升序',
      'MODIFIED-DESC': '按照修改时间降序',
      'NAME-ASC': '按照名称升序',
      'NAME-DESC': '按照名称降序'
    }
  },
  'PROCESS': {
    'NAME': '模型名称',
    'KEY': '模型key',
    'DESCRIPTION': '描述',
    'VERSION-COMMENT': '版本注释',
    'ACTION': {
      'DETAILS': '显示详细信息',
      'EDIT': '修改模型属性',
      'DUPLICATE': '复制这个模型',
      'EXPORT_BPMN20': '导出到BPMN2',
      'DELETE': '删除这个模型',
      'CREATE-CONFIRM': '创建新模型',
      'DUPLICATE-CONFIRM': '复制这个模型',
      'OPEN-IN-EDITOR': '可视化编辑器',
      'EDIT-CONFIRM': '保存',
      'DELETE-CONFIRM': '删除流程模型',
      'USE-AS-NEW-VERSION': '作为新版本使用',
      'FAVORITE': '喜欢这个模型'

    },
    'DETAILS': {
      'HISTORY-TITLE': '历史',
      'LAST-UPDATED-BY': '最后被{lastUpdatedBy} - {lastUpdated | dateformat}更新',
      'CREATED-BY': '被{createdBy}创建',
      'NO-DESCRIPTION': '这个模型没有描述信息，可以通过修改模型来添加一个描述'
    },

    'POPUP': {
      'CREATE-TITLE': '创建一个新的业务流程模型',
      'DUPLICATE-TITLE': '复制这个业务流程模型',
      'CREATE-DESCRIPTION': '您需要为新模型命名，并且您可以在这个操作中添加描述信息。',
      'DUPLICATE-DESCRIPTION': '您可以更改新模型的名称，并且此时您可以更改描述信息。',
      'EDIT-DESCRIPTION': '更改下面的任何模型属性，然后按下保存去更新模型。',
      'DELETE-DESCRIPTION': '确实要删除进程模型吗？ "{name}"?',
      'EDIT-TITLE': '编辑模型详细信息',
      'DELETE-TITLE': '删除模型',
      'DELETE-LOADING-RELATIONS': '检查模型使用...',
      'DELETE-RELATIONS-DESCRIPTION-SINGLE': '无法删除此模型，因为另一个模型正在使用它:',
      'DELETE-RELATIONS-DESCRIPTION': '无法删除此模型，因为另一个模型正在使用它:',
      'DELETE-PROCESS-RELATION': '流程模型',
      'DELETE-FORM-RELATION': '表单模型',
      'DELETE-APP-RELATION': 'App模型',
      'IMPORT-DESCRIPTION': '请浏览或拖拽.bpmn或.bpmn20.xml扩展名的BPMN XML定义',
      'IMPORT-TITLE': '导入一个流程模型',
      'USE-AS-NEW-TITLE': '作为一个新版本使用',
      'USE-AS-NEW-DESCRIPTION': '您确定要使用 {version}版本 去创建一个关于 "{name}"的新版本?',
      'USE-AS-NEW-UNRESOLVED-MODELS-ERROR': '无法完全恢复app模型到所选择的版本：由于一些引用的模型过去被删除而丢失。请相应地更新app模型。缺失模型:',
      'USE-AS-NEW-UNRESOLVED-MODEL': '模型 \'{name}\' 内部id {id}, 被 {createdBy}创建',
      'SHARED-WITH': '分享',
      'PERMISSION': '许可',
      'ACTIONS': '动作',
      'IMPORT': {
        'DROPZONE': '拖拽一个 .bpmn 或者 .bpmn20.xml BPMN XML 文件',
        'CANCEL-UPLOAD': '取消上传',
        'ERROR': '处理BPMN XML文件时出错',
        'NO-DROP': '不支持拖放'
      }
    },
    'ALERT': {
      'EDIT-CONFIRM': '模型被更新'
    },
    'ERROR': {
      'NOT-FOUND': '所请求的模型不存在'
    }
  },

  'SUBPROCESS': {
    'NAME': '子流程名称',
    'DESCRIPTION': '描述信息',
    'ACTION': {
      'CREATE-CONFIRM': '创建一个子流程'
    },
    'POPUP': {
      'CREATE-TITLE': '创建一个新的子流程',
      'CREATE-DESCRIPTION': '您需要为新的子流程命名，并且您可能希望同时添加描述。'
    }
  },

  'CASE': {
    'NAME': '模型名称',
    'KEY': '模型key',
    'DESCRIPTION': '描述信息',
    'VERSION-COMMENT': '版本注释',
    'ACTION': {
      'DETAILS': '显示详细信息',
      'EDIT': '修改模型属性',
      'DUPLICATE': '复制这个模型',
      'EXPORT_CMMN': '导出到CMMN1.1',
      'DELETE': '删除这个模型',
      'CREATE-CONFIRM': '创建新模型',
      'DUPLICATE-CONFIRM': '复制这个模型',
      'OPEN-IN-EDITOR': '可视化编辑器',
      'EDIT-CONFIRM': '保存',
      'DELETE-CONFIRM': '删除case模型',
      'USE-AS-NEW-VERSION': '作为新版本使用',
      'FAVORITE': '喜欢这个模型'
    },
    'DETAILS': {
      'HISTORY-TITLE': '历史',
      'LAST-UPDATED-BY': '最后被 {lastUpdatedBy} - {lastUpdated | dateformat}更新',
      'CREATED-BY': '被{createdBy}创建',
      'NO-DESCRIPTION': '这个模型没有描述信息，可以通过修改模型来添加一个描述'
    },
    'POPUP': {
      'CREATE-TITLE': '创建一个新的case模型',
      'DUPLICATE-TITLE': '复制这个case模型',
      'CREATE-DESCRIPTION': '您需要为新模型命名，并且您可以在这个操作中添加描述信息。',
      'DUPLICATE-DESCRIPTION': '您可以更改新模型的名称，并且此时您可以更改描述信息。',
      'EDIT-DESCRIPTION': '更改下面的任何模型属性，然后按下保存去更新模型。',
      'DELETE-DESCRIPTION': '确实要删除进程流程吗 "{name}"?',
      'EDIT-TITLE': '编辑模型详细信',
      'DELETE-TITLE': '删除模型',
      'DELETE-LOADING-RELATIONS': '检查模型使用...',
      'DELETE-RELATIONS-DESCRIPTION-SINGLE': '无法删除此模型，因为另一个模型正在使用它:',
      'DELETE-RELATIONS-DESCRIPTION': '无法删除此模型，因为另一个模型正在使用它:',
      'DELETE-PROCESS-RELATION': 'Case模型',
      'DELETE-FORM-RELATION': '表单模型',
      'DELETE-APP-RELATION': 'App模型',
      'IMPORT-DESCRIPTION': '请浏览或拖拽.cmmn 或者.cmmn.xml 扩展名的CMMN XML',
      'IMPORT-TITLE': '导入一个case模型',
      'USE-AS-NEW-TITLE': '作为一个新版本使用',
      'USE-AS-NEW-DESCRIPTION': '您确定要使用 {version}版本 去创建一个关于 "{name}"的新版本?',
      'USE-AS-NEW-UNRESOLVED-MODELS-ERROR': '无法完全恢复app模型到所选择的版本：由于一些引用的模型过去被删除而丢失。请相应地更新app模型。缺失模型:',
      'USE-AS-NEW-UNRESOLVED-MODEL': '模型 \'{name}\' 内部id {id}, 被 {createdBy}创建',
      'SHARED-WITH': '分享',
      'PERMISSION': '许可',
      'ACTIONS': '动作',
      'IMPORT': {
        'DROPZONE': '拖拽一个 .cmmn or .cmmn.xml CMMN XML文件',
        'CANCEL-UPLOAD': '取消上传',
        'ERROR': '处理CMMN XML文件时出错',
        'NO-DROP': '不支持拖放'
      }
    },
    'ALERT': {
      'EDIT-CONFIRM': '模型被更新'
    },
    'ERROR': {
      'NOT-FOUND': '所请求的模型不存在'
    }
  },

  'FORM': {
    'NAME': '表单名称',
    'KEY': '表单key',
    'DESCRIPTION': '描述',
    'ACTION': {
      'DETAILS': '显示详细信息',
      'EDIT': '修改模型属性',
      'DELETE': '复制这个表单',
      'CREATE-CONFIRM': '创建新表单',
      'DUPLICATE': '复制这个表单',
      'DUPLICATE-CONFIRM': '复制这个表单',
      'OPEN-IN-EDITOR': '表单编辑器',
      'EDIT-CONFIRM': '保存',
      'DELETE-CONFIRM': '删除表单',
      'USE-AS-NEW-VERSION': '作为新版本使用'

    },
    'DETAILS': {
      'HISTORY-TITLE': '历史',
      'LAST-UPDATED-BY': '最后被{lastUpdatedBy} - {lastUpdated | dateformat}更新',
      'CREATED-BY': '被{createdBy}创建'
    },

    'POPUP': {
      'CREATE-TITLE': '创建一个新的表单',
      'DUPLICATE-TITLE': '复制这个表单',
      'CREATE-DESCRIPTION': '您需要为新表单命名，并且您可以在这个操作中添加描述信息。',
      'DUPLICATE-DESCRIPTION': '您需要为新表单命名，并且您可以在这个操作中添加描述信息。',
      'SAVE-FORM-TITLE': '保存表单',
      'EDIT-DESCRIPTION': '更改下面的任何模型属性，然后按下保存去更新表单。',
      'DELETE-DESCRIPTION': '确实要删除表单 "{name}"?',
      'EDIT-TITLE': '编辑表单详细信息',
      'DELETE-TITLE': '删除表单',
      'USE-AS-NEW-TITLE': '作为一个新版本使用',
      'USE-AS-NEW-VERSION': '作为一个新版本使用',
      'USE-AS-NEW-DESCRIPTION': '您确定要使用 {version}版本 去创建一个关于 "{name}"的新版本?',
      'USE-AS-NEW-UNRESOLVED-MODELS-ERROR': '无法完全恢复app模型到所选择的版本：由于一些引用的模型过去被删除而丢失。请相应地更新app模型。缺失模型:',
      'USE-AS-NEW-UNRESOLVED-MODEL': '模型 \'{name}\' 内部id {id}, 被 {createdBy}创建'
    }
  },

  'DECISION-TABLE': {
    'NAME': '决策表 名称',
    'KEY': '决策表 key',
    'DESCRIPTION': '描述',
    'VERSION-COMMENT': '版本注释',
    'HIT-POLICY': '命中策略:',
    'ACTION': {
      'DETAILS': '显示详细信息',
      'EDIT': '修改模型属性',
      'SHARE': '分享决策表',
      'DELETE': '删除决策表',
      'ADD-COMMENT': '+ 添加评论',
      'CREATE-CONFIRM': '创建新的决策表',
      'OPEN-IN-EDITOR': '决策表编辑器',
      'EXPORT': 'Export 决策表',
      'DELETE-CONFIRM': '删除决策表',
      'USE-AS-NEW-VERSION': '作为新版本使用',
      'FAVORITE': '喜欢这个决策表',
      'DUPLICATE': '复制这个决策表'
    },
    'DETAILS': {
      'HISTORY-TITLE': '历史',
      'COMMENTS-TITLE': '评论',
      'LAST-UPDATED-BY': '最后被{lastUpdatedBy} - {lastUpdated | dateformat}更新',
      'CREATED-BY': '被{createdBy}创建'
    },
    'HIT-POLICIES': {
      'FIRST': 'First',
      'ANY': 'Any',
      'UNIQUE': 'Unique',
      'PRIORITY': 'Priority',
      'RULE ORDER': 'Rule Order',
      'OUTPUT ORDER': 'Output Order',
      'COLLECT': 'Collect'
    },
    'COLLECT-OPERATORS': {
      'SUM': '和',
      'MIN': '最小',
      'MAX': '最大',
      'COUNT': '总数'
    },
    'POPUP': {
      'CREATE-TITLE': '创建一个新的决策表',
      'CREATE-DESCRIPTION': '您需要为新决策表命名，并且您可以在这个操作中添加描述信息。',
      'SAVE-DESCRIPTION': '您可以更改新决策表的名称，并且此时您可以更改描述信息。',
      'DUPLICATE-TITLE': '复制决策表',
      'DUPLICATE-DESCRIPTION': '您需要为新决策表命名，并且您可以在这个操作中添加描述信息。',
      'DELETE-TITLE': '删除决策表',
      'DELETE-DESCRIPTION': '确实要删除决策表 "{name}"?',
      'SAVE-DECISION-TABLE-TITLE': '保存决策表',
      'IMPORT-DESCRIPTION': '请浏览或拖拽.dmn or .dmn.xml扩展名的的 DMN XML文件',
      'IMPORT-TITLE': '导入DMN模型',
      'IMPORT': {
        'DROPZONE': '拖拽一个 .dmn or .dmn.xml DMN XML文件',
        'CANCEL-UPLOAD': '取消上传',
        'ERROR': '处理DMN XML文件时出错',
        'NO-DROP': '不支持拖放'
      },
      'USE-AS-NEW-TITLE': '作为一个新版本使用',
      'USE-AS-NEW-VERSION': '作为一个新版本使用',
      'USE-AS-NEW-DESCRIPTION': '您确定要使用 {version}版本 去创建一个关于 "{name}"的新版本?',
      'USE-AS-NEW-UNRESOLVED-MODELS-ERROR': '无法完全恢复app模型到所选择的版本：由于一些引用的模型过去被删除而丢失。请相应地更新app模型。缺失模型:',
      'USE-AS-NEW-UNRESOLVED-MODEL': '模型 \'{name}\' 内部id {id}, 被 {createdBy}创建'
    },
    'ALERT': {
      'FAVORITE-CONFIRM': '喜欢这个决策表',
      'UN-FAVORITE-CONFIRM': '这个决策表不再流行了'
    }
  },

  'APP': {
    'NAME': 'App 定义名称',
    'KEY': 'App定义key',
    'DESCRIPTION': '描述',
    'ICON': '图标',
    'THEME': '主题',
    'GROUPS-ACCESS': '组访问，用逗号分隔',
    'USERS-ACCESS': '用户访问，用逗号分隔',
    'ACTION': {
      'DETAILS': '显示详细信息',
      'EDIT': '修改app定义属性',
      'DUPLICATE': '复制这个应用',
      'SHARE': '分享app定义',
      'DELETE': '删除app定义',
      'CREATE-CONFIRM': '创建新的app定义',
      'DUPLICATE-CONFIRM': '复制这个app定义',
      'DELETE-CONFIRM': '删除app定义',
      'USE-AS-NEW-VERSION': '作为新版本使用',
      'OPEN-IN-EDITOR': 'App编辑器',
      'PUBLISH': '发布',
      'PUBLISH-CONFIRM': '发布app定义',
      'SELECT-ICON': '修改图标...',
      'SELECT-THEME': '修改主题...',
      'EDIT-MODELS': '编辑包含的模型',
      'EXPORT-ZIP': '将app定义导出为zip文件',
      'EXPORT-BAR': '将app定义导出为可部署的bar文件'

    },
    'DETAILS': {
      'TITLE': 'App定义详细信息: {name}',
      'HISTORY-TITLE': '历史',
      'MODELS-TITLE': 'app定义中包含的模型',
      'LAST-UPDATED-BY': '最后被{lastUpdatedBy} - {lastUpdated | dateformat}更新',
      'CREATED-BY': '被{createdBy}创建',
      'NO-DESCRIPTION': '这个app定义没有描述信息，可以通过修改app定义来添加一个描述',
      'NO-MODELS-SELECTED': '没有为这个app选择模型'
    },
    'TITLE': {
      'SELECT-ICON': '选择应用图标',
      'SELECT-THEME': '选择应用主题',
      'PREVIEW': '预览'

    },
    'POPUP': {
      'CREATE-TITLE': '创建新的应用程序定义',
      'DUPLICATE-TITLE': '复制一个应用程序定义',
      'SAVE-APP-TITLE': '保存应用程序定义',
      'SAVE-APP-SAVE-SUCCESS': '保存的应用程序定义',
      'CREATE-DESCRIPTION': '您需要为新的应用程序定义命名，并且您可以在这个操作中添加描述信息。',
      'DUPLICATE-DESCRIPTION': '您需要为新的应用程序定义命名，并且您可以在这个操作中添加描述信息。',
      'PUBLISH-TITLE': '发布应用程序定义',
      'PUBLISH-DESCRIPTION': '您确定要发布应用程序定义 "{name}"? 注意这个应用程序定义将版本化，如果已经存在，则将更新工作流应用程序。',
      'PUBLISH-FIELD': '发布？请注意，如果启用了发布，则将版本化此应用程序定义，如果已经存在，则将更新工作流应用程序。',
      'PUBLISH-ERROR-PROCDEF-KEY-CONFLICT': '你的流程模型 "{modelInAppName}"具有相同的标识符"{processDefinitionKey}"作为已经存在的部署流程"{conflictingModelName}" ，关于这个app "{conflictingAppName}". 请修改这个 "id"流程模型的属性。',
      'PUBLISH-ERROR-PROCESS-ALREADY-USED': '下面的流程模型已经在另一个应用程序中使用了。这样行吗？',
      'PUBLISH-ERROR-PROCESS-ALREADY-USED-APP': 'App',
      'PUBLISH-ERROR-PROCDEF-DUPLICATE-KEYS': '无效的app: 找到重复的流程标识符 (修改这个非法的流程模型  "id"属性):',
      'DELETE-TITLE': '删除应用程序定义',
      'DELETE-DESCRIPTION': '确实要删除应用程序定义 "{name}"?',
      'DELETE-DESCRIPTION-WITH-RUNTIME': '确实要删应用程序定义 "{name}"? 注意，这个应用程序定义已经部署到任务landing页面，并且通过确认，该应用程序将从任务应用程序landing页面中删除。',
      'DELETE-CASCADE-FALSE': '只删除当前版本的应用程序定义 (v{version})',
      'DELETE-CASCADE-TRUE': '也删除所有以前的版本应用程序定义',
      'HAS-CUSTOM-STENCILITEM': '模型 "{modelName}" 使用带有自定义模板项目的模板. 在这个模型中使用这个模型是不可能的.',
      'HAS-VALIDATIONERROR': '模型 "{modelName}"  有验证错误，不能添加到应用程序定义.在编辑器中打开模型以查看关于验证错误的更多细节。',
      'IMPORT-DESCRIPTION': '请使用.zip扩展的应用程序定义浏览或拖拽一个',
      'IMPORT-TITLE': '导入应用程序定义模型',
      'IMPORT': {
        'DROPZONE': '扩拽一个.zip 应用程序定义文件',
        'CANCEL-UPLOAD': '取消上传',
        'RENEWIDM-IDS': 'Renew the user and group identifiers when importing step and BPMN models. This is often required when importing the 应用程序定义 into a different Flowable environment. It will try to link the human steps and user tasks to the right user and group in this target environment.',
        'ERROR': '处理应用程序定义文件时出错',
        'NO-DROP': '不支持拖放'
      },
      'INCLUDE-MODELS-TITLE': '包含在应用程序定义中的模型'
    },
    'ALERT': {
      'DELETE-CONFIRM': '应用程序定义删除了',
      'PUBLISH-CONFIRM': '应用程序定义已经被发布了',
      'PUBLISH-ERROR': '不能发布应用程序定义. 请检查引用的流程模型的有效性。'
    }
  },

  'SHARE-INFO': {
    'ACTION': {
      'ADD': '添加另一个人'
    }
  },

  'FORM-BUILDER': {
    'PALLETTE': {
      'TEXT': 'Text',
      'MULTILINE-TEXT': 'Multiline text',
      'PASSWORD': 'Password',
      'NUMBER': 'Number',
      'CHECKBOX': 'Checkbox',
      'DATE': 'Date',
      'DROPDOWN': 'Dropdown',
      'RADIO': 'Radio buttons',
      'PEOPLE': 'People',
      'GROUP-OF-PEOPLE': 'Group of people',
      'UPLOAD': 'Upload',
      'EXPRESSION': 'Expression',
      'DECIMAL': 'Decimal',
      'HYPERLINK': 'Hyperlink',
      'SPACER': 'Spacer',
      'HORIZONTAL-LINE': 'Horizontal line',
      'HEADLINE': 'Headline',
      'HEADLINE-WITH-LINE': 'Headline'
    },
    'TABS': {
      'GENERAL': 'General',
      'OPTIONS': 'Options',
      'UPLOAD-OPTIONS': 'Upload options',
      'ADVANCED-OPTIONS': 'Advanced'
    },
    'VERSION': 'Version {version}',
    'LAST-UPDATED': 'Last updated by {lastUpdatedBy}, {lastUpdated | dateformat}',
    'TITLE': {
      'DESIGN': 'Design',
      'OUTCOME': 'Outcomes'
    },
    'POPUP': {
      'EDIT-TITLE': 'Edit field \'{name}\'',
      'EXPRESSION-TITLE': 'Edit expression'
    },
    'MESSAGE': {
      'EMPTY-EXPRESSION': '(No expression value)',
      'EXPRESSION-HELP': 'You can also display values previously submitted in any form, as part of the text, by referencing them using a notation as follows ${myFieldId}.',
      'OPTIONS-EXPRESSION-HELP': 'You can use an expression to dynamically populate options for example by referencing a variable like this ${optionsVariable}. The expression needs to result in either a java object (java.util.List with Option objects) or its json representation.'
    },
    'LABEL': {
      'FUNCTIONAL-GROUP': 'Select group..',
      'PERSON': 'Select person..'
    },
    'COMPONENT': {
      'LABEL': 'Label:',
      'OVERRIDEID': 'Override id?',
      'ID': 'Id:',
      'PLACEHOLDER': 'Placeholder:',
      'OPTIONS': 'Options',
      'RADIO-BUTTON-DEFAULT': 'Option 1',
      'DROPDOWN-DEFAULT-EMPTY-SELECTION': 'Please choose one...',
      'DROPDOWN-EMPTY-VALUE-HELP': 'This is the \'empty value\' option. Selecting this at runtime is the taken to mean \'no value\' or \'empty\'.  This is allowed for optional fields, but not allowed for required fields.',
      'OPTIONS-EXPRESSION': 'Options expression:',
      'OPTIONS-EXPRESSION-ENABLED': 'Enable options expression',
      'REQUIRED': 'Required',
      'READONLY': 'Read-only',
      'EXPRESSION': 'Expression',
      'ADD-OPTION': '+ Add a new option',
      'UPLOAD-ALLOW-MULTIPLE': 'Allow uploading multiple files',
      'SIZE': 'Size',
      'MAX-LENGTH': 'Maximum length:',
      'MIN-LENGTH': 'Minimum length:',
      'PASSWORD-UNMASK-OPTION': 'password masking/unmasking option',
      'HYPERLINK-URL': 'Hyperlink URL',
      'REGEX-PATTERN': 'Regex standard',
      'MASK': {
        'TITLE': 'Input mask',
        'EXAMPLES': {
          'TITLE': 'Examples:',
          'NUMBER': 'Any number',
          'LETTER': 'Any letter',
          'NUMBERORLETTER': 'Any letter or number',
          'OPTIONAL': 'Make mask optional (not valid)',
          'PHONE': 'Phone'
        }
      }
    },
    'OUTCOMES': {
      'DESCRIPTION': 'You can define multiple outcomes for this task. When completing a task, the users selects one of the available outcomes, which can be used in eg. a condition further on in the process.',
      'NO-OUTCOMES-OPTION': 'Don\'t use custom outcomes, only show a \'Complete\' button.',
      'OUTCOMES-OPTION': 'Use custom outcomes for this form.',
      'POSSIBLE-OUTCOMES': 'Possible outcomes',
      'NEW-OUTCOME-PLACEHOLDER': 'Enter new outcome',
      'ADD': 'Add outcome',
      'REMOVE': 'Remove'
    }
  },

  'DECISION-TABLE-EDITOR': {
    'EMPTY-MESSAGES': {
      'NO-VARIABLE-SELECTED': '未定义'
    },
    'POPUP': {
      'EXPRESSION-EDITOR': {
        'INPUT-TITLE': '编辑输入列',
        'INPUT-DESCRIPTION': '选择输入变量作为列的输入',
        'OUTPUT-TITLE': '编辑输出列',
        'OUTPUT-DESCRIPTION': '选择一个现有的输出变量或创建一个新的变量',
        'EXPRESSION-LABEL': '列标签:',
        'EXPRESSION-PLACEHOLDER': '输入可选标签',
        'EXPRESSION-VARIABLE-NAME': '变量名称:',
        'EXPRESSION-VARIABLE-TYPE': '变量类型:',
        'EXPRESSION-VARIABLE-NAME-PLACEHOLDER': '输入变量名',
        'OUTPUT-NEW-VARIABLE-ID': '变量ID:',
        'OUTPUT-NEW-VARIABLE-TYPE': '变量类型:',
        'COMPLEX-EXPRESSION-LABEL': '复杂表达式:',
        'ALLOWED-VALUES': '允许值（可选）:',
        'OUTPUT-VALUES': '输出值',
        'OUTPUT-VALUES-OPTIONAL': '(可选):',
        'OUTPUT-VALUES-NOT-OPTIONAL': '(为优先级/输出顺序拖动行):'
      }
    },
    'BUTTON-ACTIONS-LABEL': '动作',
    'BUTTON-ADD-INPUT-LABEL': '添加输入',
    'BUTTON-ADD-OUTPUT-LABEL': '添加输出',
    'BUTTON-ADD-RULE-LABEL': '添加规则',
    'BUTTON-MOVE-RULE-UPWARDS-LABEL': '向上移动',
    'BUTTON-MOVE-RULE-DOWNWARDS-LABEL': '向下移动',
    'BUTTON-REMOVE-RULE-LABEL': '移除规则',
    'ALERT': {
      'EXPRESSION-VARIABLE-REQUIRED-ERROR': '所有输入和输出表达式都必须引用表单字段或变量。',
      'SAVE-CONFIRM': '保存决策表\'{name}\''
    }
  },

  'TOUR': {
    'WELCOME-TITLE': '欢迎, {userName}',
    'WELCOME-CONTENT': '这是一个短暂的flowable编辑器. 接下来的几个步骤将指导您通过应用程序的不同部分来启动。按ESC键随时停止。',
    'PALETTE-TITLE': '调色板',
    'PALETTE-CONTENT': '在这里可以找到创建业务流程的所有可用构成。它们是按逻辑组排列的。只需点击它就可以打开一组:',
    'CANVAS-TITLE': '画布',
    'CANVAS-CONTENT': '这是创建业务流程的工作空间。从左侧的调色板中拖动元素，并将它们放在画布上以开始建模',
    'DRAGDROP-TITLE': '拖放示例',
    'DRAGDROP-CONTENT': '下面是一个如何开始建模的例子:',
    'PROPERTIES-TITLE': '属性',
    'PROPERTIES-CONTENT': '在这里您可以配置业务流程构造的属性。只需选择画布上的项目，它的属性就会显示出来。如果要编辑该属性，请单击该属性。',
    'TOOLBAR-TITLE': '工具栏',
    'TOOLBAR-CONTENT': '可以在这里找到所有的动作：保存或验证模型, 复制和粘贴一个流程的部分, 等等. 在按钮上悬停以此获得对动作的描述信息.',
    'END-TITLE': '终点',
    'END-CONTENT': '就是这样！现在可以开始建模过程。如果你有任何问题，请联系开发者。'
  },

  'FEATURE-TOUR': {
    'BENDPOINT': {
      'TITLE': '教程',
      'DESCRIPTION': '当使用连线流将流程按照步骤彼此连接的时候，您可能会发现，这些连线彼此交叉，或者您希望以不同的方式排列它们。这样做, 可以向连线添加或移除一个弯曲点。<br/><br/>如下图所示，你首先应该点击 \'添加弯曲点\' 然后单击连线添加它。注意，连线将在绿色中显示一个微妙的指示，以显示可以在那里添加弯曲点。<br/><br/>删除一个弯曲点再次遵循类似的模式: 点击 \'移除弯曲点\' 按钮 ，然后点击弯曲点再次移除。'
    }
  },

  'ACTION': {
    'OK': 'Ok',
    'SAVE': '保存',
    'SAVE-AND-CLOSE': '保存和关闭编辑器',
    'SEND': '发送',
    'CANCEL': '取消',
    'SELECT': '选择',
    'ADD': '添加',
    'REMOVE': '移除',
    'MOVE.UP': '移动入口',
    'MOVE.DOWN': '向下移动'
  },

  'TOOLBAR': {
    'ACTION': {
      'CLOSE': '关闭编辑器并返回到概览页面',
      'SAVE': '保存模型',
      'VALIDATE': '验证模型',
      'CUT': '剪切 (在业务流程中选择一个或多个元素)',
      'COPY': '拷贝 (在业务流程中选择一个或多个元素)',
      'PASTE': '粘贴',
      'DELETE': '删除选定元素',
      'UNDO': '撤消',
      'REDO': '重做',
      'ZOOMIN': '放大',
      'ZOOMOUT': '缩小',
      'ZOOMACTUAL': '缩放到实际尺寸',
      'ZOOMFIT': '缩放到适当大小',
      'BENDPOINT': {
        'ADD': '向选定的连线添加弯曲点',
        'REMOVE': '向选定的连线移除弯曲点',
      },
      'ALIGNHORIZONTAL': '水平对齐',
      'ALIGNVERTICAL': '垂直对齐',
      'SAMESIZE': '相同大小',
      'HELP': '开始导游',
      'FEEDBACK': '提供反馈',
    }
  },

  'FORM_TOOLBAR': {
    'ACTION': {
      'SAVE': '保存模型',
    }
  },


  'APP_DEFINITION_TOOLBAR.ACTION.SAVE': '保存应用程序定义',

  'BUTTON.ACTION.DELETE.TOOLTIP': '从模型中删除元素',
  'BUTTON.ACTION.MORPH.TOOLTIP': '更改元素类型',

  'ELEMENT.AUTHOR': '作者',
  'ELEMENT.DATE_CREATED': '创建日期',

  'PROPERTY.REMOVED': '移除',
  'PROPERTY.EMPTY': '没有值',
  'PROPERTY.PROPERTY.EDIT.TITLE': '更改值为',

  'PROPERTY.FEEDBACK.TITLE': '请填写您的反馈意见',

  'PROPERTY.ASSIGNMENT.TITLE': '分配',
  'PROPERTY.ASSIGNMENT.TYPE': '类型',
  'PROPERTY.ASSIGNMENT.TYPE.IDENTITYSTORE': '身份存储',
  'PROPERTY.ASSIGNMENT.TYPE.STATIC': '固定值',
  'PROPERTY.ASSIGNMENT.ASSIGNEE': '分配',
  'PROPERTY.ASSIGNMENT.MATCHING': '使用 ↑ 和 ↓选择并按Enter确认或使用鼠标',
  'PROPERTY.ASSIGNMENT.ASSIGNEE_PLACEHOLDER': '输入分配人',
  'PROPERTY.ASSIGNMENT.EMPTY': '没有选择分配人',
  'PROPERTY.ASSIGNMENT.NONE': '没有 ...',
  'PROPERTY.ASSIGNMENT.PLACEHOLDER-SEARCHUSER': '搜索用户',
  'PROPERTY.ASSIGNMENT.PLACEHOLDER-SEARCHGROUP': '搜索组',
  'PROPERTY.ASSIGNMENT.SEARCH': '搜索: ',
  'PROPERTY.ASSIGNMENT.ASSIGNEE_DISPLAY': '分配人 {assignee}',
  'PROPERTY.ASSIGNMENT.CANDIDATE_USERS_DISPLAY': '{length} 候选用户',
  'PROPERTY.ASSIGNMENT.CANDIDATE_USERS': '候选用户',
  'PROPERTY.ASSIGNMENT.CANDIDATE_GROUPS_DISPLAY': '{length} 候选组',
  'PROPERTY.ASSIGNMENT.CANDIDATE_GROUPS': '候选组',
  'PROPERTY.ASSIGNMENT.USER_IDM_DISPLAY': '用户 {firstName} {lastName}',
  'PROPERTY.ASSIGNMENT.USER_IDM_EMAIL_DISPLAY': '用户 {email}',
  'PROPERTY.ASSIGNMENT.USER_IDM_FIELD_DISPLAY': '字段 {name}',
  'PROPERTY.ASSIGNMENT.IDM_EMPTY': '流程发起人',
  'PROPERTY.ASSIGNMENT.IDM.TYPE': '分配',
  'PROPERTY.ASSIGNMENT.IDM.NO_CANDIDATE_USERS': '没有选择候选人...',
  'PROPERTY.ASSIGNMENT.IDM.NO_CANDIDATE_GROUPS': '没有选择候选组...',
  'PROPERTY.ASSIGNMENT.IDM.DROPDOWN.INITIATOR': '分配给流程发起人',
  'PROPERTY.ASSIGNMENT.IDM.DROPDOWN.USER': '分配给单个用户',
  'PROPERTY.ASSIGNMENT.IDM.DROPDOWN.USERS': '候选用户',
  'PROPERTY.ASSIGNMENT.IDM.DROPDOWN.GROUPS': '候选组',
  'PROPERTY.ASSIGNMENT.INITIATOR-CAN-COMPLETE': '允许流程发起人完成任务',
  'PROPERTY.EXECUTIONLISTENERS.DISPLAY': '{length} 执行监听器',
  'PROPERTY.EXECUTIONLISTENERS.EMPTY': '没有配置执行监听器',
  'PROPERTY.EXECUTIONLISTENERS.EVENT': '事件',
  'PROPERTY.EXECUTIONLISTENERS.CLASS': '类',
  'PROPERTY.EXECUTIONLISTENERS.CLASS.PLACEHOLDER': '输入一个类名',
  'PROPERTY.EXECUTIONLISTENERS.EXPRESSION': '表达式',
  'PROPERTY.EXECUTIONLISTENERS.EXPRESSION.PLACEHOLDER': '输入一个表达式',
  'PROPERTY.EXECUTIONLISTENERS.DELEGATEEXPRESSION': '委托表达式',
  'PROPERTY.EXECUTIONLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER': '输入一个委托表达式',
  'PROPERTY.EXECUTIONLISTENERS.UNSELECTED': '没有选择执行监听器',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.NAME': '名称',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.NAME.PLACEHOLDER': '输入一个名称',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.EXPRESSION': '表达式',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.EXPRESSION.PLACEHOLDER': '输入一个表达式',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.STRINGVALUE': '字符串值',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.STRINGVALUE.PLACEHOLDER': '输入一个字符串值',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.STRING': '字符串',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.STRING.PLACEHOLDER': '输入一个字符串',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.IMPLEMENTATION': '实现',
  'PROPERTY.EXECUTIONLISTENERS.FIELDS.EMPTY': '未选择字段',

  'PROPERTY.FIELDS': '{length} 字段',
  'PROPERTY.FIELDS.EMPTY': '未选择字段',
  'PROPERTY.FIELDS.NAME': '名称',
  'PROPERTY.FIELDS.NAME.PLACEHOLDER': '输入一个名称',
  'PROPERTY.FIELDS.EXPRESSION': '表达式',
  'PROPERTY.FIELDS.EXPRESSION.PLACEHOLDER': '输入一个表达式',
  'PROPERTY.FIELDS.STRINGVALUE': '字符串值',
  'PROPERTY.FIELDS.STRINGVALUE.PLACEHOLDER': '输入一个字符串值',
  'PROPERTY.FIELDS.STRING': '字符串',
  'PROPERTY.FIELDS.STRING.PLACEHOLDER': '输入一个字符串',
  'PROPERTY.FIELDS.IMPLEMENTATION': '实现',

  'PROPERTY.DATAPROPERTIES.VALUES': '{length} data objects',
  'PROPERTY.DATAPROPERTIES.EMPTY': '没有配置data objects',
  'PROPERTY.DATAPROPERTIES.ID': 'Id',
  'PROPERTY.DATAPROPERTIES.ID.PLACEHOLDER': '输入一个id',
  'PROPERTY.DATAPROPERTIES.NAME': '名称',
  'PROPERTY.DATAPROPERTIES.NAME.PLACEHOLDER': '输入一个名称',
  'PROPERTY.DATAPROPERTIES.TYPE': '类型',
  'PROPERTY.DATAPROPERTIES.VALUE.PLACEHOLDER': '输入一个值 (可选)',
  'PROPERTY.DATAPROPERTIES.VALUE': '默认值',

  'PROPERTY.FORMPROPERTIES.VALUE': '{length} 表单属性',
  'PROPERTY.FORMPROPERTIES.EMPTY': '没有选择表单属性',
  'PROPERTY.FORMPROPERTIES.ID': 'Id',
  'PROPERTY.FORMPROPERTIES.ID.PLACEHOLDER': '输入一个id',
  'PROPERTY.FORMPROPERTIES.NAME': '名称',
  'PROPERTY.FORMPROPERTIES.NAME.PLACEHOLDER': '输入一个名称',
  'PROPERTY.FORMPROPERTIES.TYPE': '类型',
  'PROPERTY.FORMPROPERTIES.DATEPATTERN': '日期格式',
  'PROPERTY.FORMPROPERTIES.DATEPATTERN.PLACEHOLDER': '输入日期格式',
  'PROPERTY.FORMPROPERTIES.VALUES': '值',
  'PROPERTY.FORMPROPERTIES.ENUMVALUES.EMPTY': '未选择枚举值',
  'PROPERTY.FORMPROPERTIES.VALUES.ID': 'Id',
  'PROPERTY.FORMPROPERTIES.VALUES.NAME': '名称',
  'PROPERTY.FORMPROPERTIES.VALUES.ID.PLACEHOLDER': '输入id值',
  'PROPERTY.FORMPROPERTIES.VALUES.NAME.PLACEHOLDER': '输入名称值',
  'PROPERTY.FORMPROPERTIES.EXPRESSION': '表达式',
  'PROPERTY.FORMPROPERTIES.EXPRESSION.PLACEHOLDER': '输入一个表达式',
  'PROPERTY.FORMPROPERTIES.VARIABLE': '变量',
  'PROPERTY.FORMPROPERTIES.VARIABLE.PLACEHOLDER': '输入一个变量',
  'PROPERTY.FORMPROPERTIES.REQUIRED': '必须的',
  'PROPERTY.FORMPROPERTIES.READABLE': '可读的',
  'PROPERTY.FORMPROPERTIES.WRITABLE': '可写的',

  'PROPERTY.INPARAMETERS.VALUE': '{length} in-parameters',
  'PROPERTY.INPARAMETERS.EMPTY': '没有配置in-parameters ',

  'PROPERTY.OUTPARAMETERS.VALUE': '{length} out-parameters',
  'PROPERTY.OUTPARAMETERS.EMPTY': '没有配置out-parameters',

  'PROPERTY.PARAMETER.SOURCE': '源',
  'PROPERTY.PARAMETER.SOURCE.PLACEHOLDER': '输入一个源',
  'PROPERTY.PARAMETER.SOURCEEXPRESSION': '源表达式',
  'PROPERTY.PARAMETER.SOURCEEXPRESSION.PLACEHOLDER': '输入一个源表达式',
  'PROPERTY.PARAMETER.TARGET': '目标',
  'PROPERTY.PARAMETER.TARGET.PLACEHOLDER': '输入一个目标',
  'PROPERTY.PARAMETER.EMPTY': '没有选择参数',

  'PROPERTY.PROCESSREFERENCE.EMPTY': '没有选择引用',
  'PROPERTY.PROCESSREFERENCE.TITLE': '流程参考',
  'PROPERTY.PROCESSREFERENCE.ERROR.PROCESS': '加载流程出错。稍后再试一次',
  'PROPERTY.PROCESSREFERENCE.PROCESS.LOADING': '加载流程...',
  'PROPERTY.PROCESSREFERENCE.PROCESS.EMPTY': '此文件夹不包含流程',

  'PROPERTY.FORMREFERENCE.EMPTY': '没有选择参考',
  'PROPERTY.FORMREFERENCE.TITLE': '表单引用',
  'PROPERTY.FORMREFERENCE.DESCRIPTION': '引用表单',
  'PROPERTY.FORMREFERENCE.ERROR.FORM': '加载表单出错。稍后再试一次',
  'PROPERTY.FORMREFERENCE.FORM.LOADING': '加载表单...',
  'PROPERTY.FORMREFERENCE.FORM.EMPTY': '此文件夹不包含表单',

  'PROPERTY.TASKLISTENERS.VALUE': '{length}任务监听器',
  'PROPERTY.TASKLISTENERS.EMPTY': '没有配置任务监听器',
  'PROPERTY.TASKLISTENERS.EVENT': '事件',
  'PROPERTY.TASKLISTENERS.CLASS': '类',
  'PROPERTY.TASKLISTENERS.CLASS.PLACEHOLDER': '输入一个类名',
  'PROPERTY.TASKLISTENERS.EXPRESSION': '表达式',
  'PROPERTY.TASKLISTENERS.EXPRESSION.PLACEHOLDER': '输入一个表达式',
  'PROPERTY.TASKLISTENERS.DELEGATEEXPRESSION': '委托表达式',
  'PROPERTY.TASKLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER': '输入一个委托表达式',
  'PROPERTY.TASKLISTENERS.UNSELECTED': '没有选择任务监听器',
  'PROPERTY.TASKLISTENERS.FIELDS.NAME': '名称',
  'PROPERTY.TASKLISTENERS.FIELDS.NAME.PLACEHOLDER': '输入一个名称',
  'PROPERTY.TASKLISTENERS.FIELDS.EXPRESSION': '表达式',
  'PROPERTY.TASKLISTENERS.FIELDS.EXPRESSION.PLACEHOLDER': '输入一个表达式',
  'PROPERTY.TASKLISTENERS.FIELDS.STRINGVALUE': '字符串值',
  'PROPERTY.TASKLISTENERS.FIELDS.STRINGVALUE.PLACEHOLDER': '输入一个字符串值',
  'PROPERTY.TASKLISTENERS.FIELDS.STRING': '字符串',
  'PROPERTY.TASKLISTENERS.FIELDS.STRING.PLACEHOLDER': '输入一个字符串',
  'PROPERTY.TASKLISTENERS.FIELDS.IMPLEMENTATION': '实现',
  'PROPERTY.TASKLISTENERS.FIELDS.EMPTY': '没有选择字段',

  'PROPERTY.EVENTLISTENERS.DISPLAY': '{length} 事件监听器',
  'PROPERTY.EVENTLISTENERS.EMPTY': '没有配置事件监听器',
  'PROPERTY.EVENTLISTENERS.EVENTS': '事件',
  'PROPERTY.EVENTLISTENERS.RETHROW': 'Rethrow event?',
  'PROPERTY.EVENTLISTENERS.CLASS': '类',
  'PROPERTY.EVENTLISTENERS.CLASS.PLACEHOLDER': '输入一个类名',
  'PROPERTY.EVENTLISTENERS.DELEGATEEXPRESSION': '委托表达式',
  'PROPERTY.EVENTLISTENERS.DELEGATEEXPRESSION.PLACEHOLDER': '输入一个委托表达式',
  'PROPERTY.EVENTLISTENERS.ENTITYTYPE': '实体类型',
  'PROPERTY.EVENTLISTENERS.ENTITYTYPE.PLACEHOLDER': '输入一个实体类型',
  'PROPERTY.EVENTLISTENERS.RETHROWTYPE': 'Rethrow event type',
  'PROPERTY.EVENTLISTENERS.ERRORCODE': '错误码',
  'PROPERTY.EVENTLISTENERS.ERRORCODE.PLACEHOLDER': '输入一个错误码',
  'PROPERTY.EVENTLISTENERS.MESSAGENAME': '消息名称',
  'PROPERTY.EVENTLISTENERS.MESSAGENAME.PLACEHOLDER': '输入一个消息名称',
  'PROPERTY.EVENTLISTENERS.SIGNALNAME': '信号名称',
  'PROPERTY.EVENTLISTENERS.SIGNALNAME.PLACEHOLDER': '输入信号名称',
  'PROPERTY.EVENTLISTENERS.UNSELECTED': '没有选择事件监听器',

  'PROPERTY.SIGNALDEFINITIONS.DISPLAY': '{length} 信号定义',
  'PROPERTY.SIGNALDEFINITIONS.EMPTY': '没有配置信号定义',
  'PROPERTY.SIGNALDEFINITIONS.SCOPE-GLOBAL': '全局',
  'PROPERTY.SIGNALDEFINITIONS.SCOPE-PROCESSINSTANCE': '流程实例',
  'PROPERTY.SIGNALDEFINITIONS.ID': 'Id',
  'PROPERTY.SIGNALDEFINITIONS.NAME': '名称',
  'PROPERTY.SIGNALDEFINITIONS.SCOPE': 'Scope',

  'PROPERTY.MESSAGEDEFINITIONS.DISPLAY': '{length} 消息定义',
  'PROPERTY.MESSAGEDEFINITIONS.EMPTY': '没有配置消息定义',
  'PROPERTY.MESSAGEDEFINITIONS.ID': 'Id',
  'PROPERTY.MESSAGEDEFINITIONS.NAME': '名称',

  'PROPERTY.SEQUENCEFLOW.ORDER.EMPTY': '没有确定连线的顺序',
  'PROPERTY.SEQUENCEFLOW.ORDER.NOT.EMPTY': '设置连线的顺序',
  'PROPERTY.SEQUENCEFLOW.ORDER.NO.OUTGOING.SEQUENCEFLOW.FOUND': '没有发现流出连线.',
  'PROPERTY.SEQUENCEFLOW.ORDER.DESCRIPTION': '设置需要评估连线的顺序:',
  'PROPERTY.SEQUENCEFLOW.ORDER.SEQUENCEFLOW.VALUE': '连线到 {targetType} {targetTitle}',

  'PROPERTY.SEQUENCEFLOW.CONDITION.TITLE': '连线条件',
  'PROPERTY.SEQUENCEFLOW.CONDITION.STATIC': '条件表达式',
  'PROPERTY.SEQUENCEFLOW.CONDITION.NO-CONDITION-DISPLAY': '没有设置条件',

  'PROPERTY.DUEDATE.EMPTY': '没有到期',
  'PROPERTY.DUEDATE.DEFINED': '定义到期日',
  'PROPERTY.DUEDATE.TITLE': '到期日',
  'PROPERTY.DUEDATE.EXPRESSION-LABEL': '到期日表达式',
  'PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.NO-DUEDATE': '没有到期日',
  'PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.EXPRESSION': '表达式定义',
  'PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.STATIC': '任务创建后的固定持续时间',
  'PROPERTY.DUEDATE.TASK-DUE-DATE-OPTIONS.FIELD': '基于字段',

  'MODEL.SAVE.TITLE': '保存模型',
  'MODEL.VALIDATE.TITLE': '验证结果',
  'MODEL.NAME': '名称',
  'MODEL.KEY': 'Key',
  'MODEL.DESCRIPTION': '描述',
  'MODEL.SAVE.NEWVERSION': '将此保存为新版本？这意味着你可以回到以前的版本。',
  'MODEL.SAVE.COMMENT': '评论',
  'MODEL.SAVE.SAVING': '正在保存模型',
  'MODEL.LASTMODIFIEDDATE': '最后保存',
  'MODEL.SAVE.ERROR': 'Unexpected error: 不能保存模型',
  'MODEL.VALIDATIONERRORS': ' 注意，模型包含验证错误。这意味着该模型在当前状态下不能部署在Flowable引擎上。',
  'MODEL.CONFLICT.WRITE': '不能保存模型: \'{userFullName}\'对该模型进行了更改',
  'MODEL.CONFLICT.WRITE.OPTIONS': '选择一个选项来解决此冲突:',
  'MODEL.CONFLICT.WRITE.OPTION.OVERWRITE': '覆盖其他模型',
  'MODEL.CONFLICT.WRITE.OPTION.DISCARDCHANGES': '放弃我的改变',
  'MODEL.CONFLICT.WRITE.OPTION.SAVEAS': '保存为新模型',
  'MODEL.CONFLICT.WRITE.OPTION.NEWVERSION': '创建新版本',
  'MODEL.CONFLICT.SAVEAS': '另存为:',

  'EVENT_TYPE.ACTIVITY.COMPENSATE.TOOLTIP': '一项活动将作为对另一活动的补偿而被执行。事件针对即将执行的活动进行补偿。',
  'EVENT_TYPE.ACTIVITY.COMPLETED.TOOLTIP': '一项活动已圆满完成。',
  'EVENT_TYPE.ACTIVITY.ERROR.RECEIVED.TOOLTIP': '活动已接收到错误事件。在活动接收到实际错误之前发送',
  'EVENT_TYPE.MEMBERSHIP.CREATED.TOOLTIP': '创建了新的membership',
  'EVENT_TYPE.MEMBERSHIP.DELETED.TOOLTIP': '单个membership已被删除',
  'EVENT_TYPE.MEMBERSHIPS.DELETED.TOOLTIP': '相关组中的所有成员已被删除。由于可能的原因，个别事件不会被派遣。',
  'EVENT_TYPE.TASK.ASSIGNED.TOOLTIP': '一个任务已经被分配人了。这将抛出一个 ENTITY_UPDATED 事件',
  'EVENT_TYPE.TASK.COMPLETED.TOOLTIP': '一个任务已经被完成。在删除任务实体之前调度',
  'EVENT_TYPE.UNCAUGHT.BPMNERROR.TOOLTIP': '当BPMN错误被抛出，但未在流程中捕获时',
  'EVENT_TYPE.VARIABLE.CREATED.TOOLTIP': '已经创建了一个新的变量',
  'EVENT_TYPE.VARIABLE.DELETED.TOOLTIP': '已删除现有变量',
  'EVENT_TYPE.VARIABLE.UPDATED.TOOLTIP': '已更新现有变量',

  'PROPERTY.DECISIONTABLEREFERENCE.EMPTY': '没有选择引用',
  'PROPERTY.DECISIONTABLEREFERENCE.TITLE': '决策表引用',
  'PROPERTY.DECISIONTABLEREFERENCE.ERROR.FORM': '加载决策表出现错误. 稍后再试一次',
  'PROPERTY.DECISIONTABLEREFERENCE.DECISIONTABLE.LOADING': '加载决策表...',
  'PROPERTY.DECISIONTABLEREFERENCE.DECISIONTABLE.EMPTY': '此文件夹不包含任何决策表',

  'PROPERTY.CASEREFERENCE.EMPTY': '没有选择引用',
  'PROPERTY.CASEREFERENCE.TITLE': 'Case模型引用',
  'PROPERTY.CASEREFERENCE.ERROR.FORM': '加载case模型时出错。稍后再试一次',
  'PROPERTY.CASEREFERENCE.CASE.LOADING': '加载case模型...',
  'PROPERTY.CASEREFERENCE.CASE.EMPTY': '此文件夹不包含任何case模型',

  'PROPERTY.PACKAGEA': {}
}
