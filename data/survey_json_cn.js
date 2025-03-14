export const json ={
  "title": "TEDxPetalingStreet 志愿者申请表",
  "showQuestionNumbers": "onPage",
  "pages": [
    {
      "name": "基本信息",
      "elements": [
        {
          "type": "text",
          "name": "email",
          "title": "电子邮件 *",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "name_ic",
          "title": "身份证姓名 *",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "nickname",
          "title": "小名"
        },
        {
          "type": "radiogroup",
          "name": "gender",
          "title": "性别 *",
          "isRequired": true,
          "choices": [
            "女",
            "男",
            "其他"
          ]
        },
        {
          "type": "dropdown",
          "name": "age_group",
          "title": "年龄层 *",
          "isRequired": true,
          "choices": [
            "18岁以下",
            "18-24",
            "25-34",
            "35-44",
            "45-54",
            "55-64",
            "65岁或以上"
          ]
        },
        {
          "type": "text",
          "name": "contact",
          "title": "联络号码 *",
          "isRequired": true,
          "placeHolder": "例如：60123456789"
        },
        {
          "type": "radiogroup",
          "name": "language_preference",
          "title": "语言偏好 *",
          "isRequired": true,
          "choices": [
            "我可以理解及使用中文回答",
            "我想使用英文版表格回答"
          ]
        },
        {
          "type": "text",
          "name": "education",
          "title": "最高学历 *",
          "isRequired": true,
          "placeHolder": "例如：文学学士（主修传播与媒体研究）"
        }
      ]
    },
    {
      "name": "经验与专长",
      "elements": [
        {
          "type": "text",
          "name": "mandarin_proficiency",
          "title": "请问您可以阅读及书写中文吗？ *",
          "isRequired": true
        },
        {
          "type": "text",
          "name": "current_industry",
          "title": "目前所在行业/学习领域 *",
          "isRequired": true,
          "placeHolder": "如您为学生，请注明您的课程"
        },
        {
          "type": "comment",
          "name": "tedx_attendance",
          "title": "您是否曾参加过TEDxPetalingStreet活动？如有，请告知参加的场次。"
        }
      ]
    },
    {
      "name": "志愿者偏好",
      "elements": [
        {
          "type": "radiogroup",
          "name": "volunteer_preference",
          "title": "您加入TEDxPetalingStreet志愿者的主要原因是？ *",
          "isRequired": true,
          "choices": [
            "希望从事与我所学/工作相关的角色",
            "想尝试新的领域/对任何机会持开放态度"
          ]
        },
        {
          "type": "comment",
          "name": "other_volunteering_experience",
          "title": "除了TEDx之外，您有其他志愿服务经验吗？请描述您的角色。"
        }
      ]
    },
    {
      "name": "组别选择",
      "elements": [
        {
          "type": "dropdown",
          "name": "first_choice",
          "title": "[第一选择] 您希望加入哪个组别？ *",
          "isRequired": true,
          "choices": [
            "文案组",
            "主视觉-平面/动画设计组",
            "社交媒体组",
            "摄影及摄像组",
            "资讯管理组",
            "合作伙伴（资金/实物赞助）组",
            "餐饮组",
            "票务组",
            "公共关系组",
            "体验/展位/周边商品组",
            "讲者策划组",
            "舞台管理组",
            "制作组"
          ]
        },
        {
          "type": "dropdown",
          "name": "second_choice",
          "title": "[第二选择] 您希望加入哪个组别？ *",
          "isRequired": true,
          "choices": [
            "文案组",
            "主视觉-平面/动画设计组",
            "社交媒体组",
            "摄影及摄像组",
            "资讯管理组",
            "合作伙伴（资金/实物赞助）组",
            "餐饮组",
            "票务组",
            "公共关系组",
            "体验/展位/周边商品组",
            "讲者策划组",
            "舞台管理组",
            "制作组"
          ]
        }
      ]
    },
    {
      "name": "设计与社交媒体",
      "elements": [
        {
          "type": "comment",
          "name": "design_question",
          "title": "【主视觉-平面/动画设计】请写下您最喜爱的书籍或广告，并说明原因。"
        },
        {
          "type": "comment",
          "name": "design_question_chinese",
          "title": "请将上题答案翻译成中文。"
        },
        {
          "type": "comment",
          "name": "social_media_improvement",
          "title": "您觉得过去TEDxPetalingStreet在社交媒体的文案有哪些需要改进之处？"
        }
      ]
    },
    {
      "name": "设计工具",
      "elements": [
        {
          "type": "text",
          "name": "design_software",
          "title": "您通常使用哪些图形设计软件？（例如：Adobe Illustrator, InDesign, Photoshop, After Effects, Animate）"
        },
        {
          "type": "rating",
          "name": "software_proficiency",
          "title": "请为以上软件的使用熟练度打分（1-10分，10分为最高） *",
          "isRequired": true,
          "rateMin": 1,
          "rateMax": 10,
          "minRateDescription": "1",
          "maxRateDescription": "10"
        },
        {
          "type": "comment",
          "name": "design_portfolio",
          "title": "请提供您的设计作品集以供评估。"
        }
      ]
    },
    {
      "name": "社交媒体与摄影摄像",
      "elements": [
        {
          "type": "radiogroup",
          "name": "social_media_experience",
          "title": "您是否有过社交媒体内容设计和排版的经验？ *",
          "isRequired": true,
          "choices": [
            "有",
            "没有"
          ]
        },
        {
          "type": "comment",
          "name": "social_media_design_aspects",
          "title": "您主要从事哪些方面的设计工作？（例如：品牌设计、网页/UIUX设计、海报设计等）"
        },
        {
          "type": "text",
          "name": "preferred_social_media",
          "title": "您最常使用哪个社交平台？（可附上账号信息）"
        },
        {
          "type": "comment",
          "name": "social_media_management",
          "title": "您是否有管理社交媒体账号的经验？请简述。"
        },
        {
          "type": "comment",
          "name": "social_media_improvement_platform",
          "title": "请选出1个或2个社交媒体平台（例如：Facebook、Instagram、TikTok、小红书），并提供如何提升宣传效果的建议。"
        },
        {
          "type": "radiogroup",
          "name": "photography_videography",
          "title": "【摄影及摄像】您擅长哪项？ *",
          "isRequired": true,
          "choices": [
            "摄影/照片",
            "摄像/视频",
            "两者皆可"
          ]
        },
        {
          "type": "radiogroup",
          "name": "weekday_shoot",
          "title": "您是否能在平日参与拍摄？",
          "choices": [
            "是",
            "否"
          ]
        },
        {
          "type": "text",
          "name": "shoot_notice",
          "title": "如果可以，请问提前多久确认拍摄时间？"
        }
      ]
    },
    {
      "name": "票务与客服",
      "elements": [
        {
          "type": "radiogroup",
          "name": "customer_service",
          "title": "您是否能从事客户服务相关工作？ *",
          "isRequired": true,
          "choices": [
            "是",
            "否"
          ]
        },
        {
          "type": "radiogroup",
          "name": "liaison_teacher",
          "title": "您是否可以作为联络人，与参加活动的学校老师保持联系？ *",
          "isRequired": true,
          "choices": [
            "是",
            "否"
          ]
        },
        {
          "type": "radiogroup",
          "name": "note_taking",
          "title": "您是否能在会议中进行记录/做会议纪要？ *",
          "isRequired": true,
          "choices": [
            "是",
            "否"
          ]
        }
      ]
    },
    {
      "name": "文案与公共关系",
      "elements": [
        {
          "type": "comment",
          "name": "writing_experience",
          "title": "您是否有写作（文章、标题、博客等）经验？如有，请提供参考；如无，您是否有兴趣尝试？"
        },
        {
          "type": "comment",
          "name": "favorite_media",
          "title": "请列出您最喜欢的3家马来西亚在线媒体/自媒体，并说明原因。"
        },
        {
          "type": "comment",
          "name": "favorite_animal",
          "title": "您认为哪种动物最能代表您的个性？为什么？"
        }
      ]
    },
    {
      "name": "其他经验",
      "elements": [
        {
          "type": "comment",
          "name": "pop_up_experience",
          "title": "除了TEDxPetalingStreet之外，您还参加过哪些活动？其中最让您印象深刻的是哪一次？"
        }
      ]
    },
    {
      "name": "讲者策划",
      "elements": [
        {
          "type": "comment",
          "name": "speaker_content",
          "title": "观看指定演讲后，您认为讲者分享中有哪些值得肯定的地方？"
        },
        {
          "type": "comment",
          "name": "speaker_improvement",
          "title": "您觉得如何改进他们的内容？（例如：内容脉络、文案排版、例子数量或精准度等）"
        },
        {
          "type": "comment",
          "name": "speaker_ideas",
          "title": "请具体列举这两位讲者分享的主要想法。"
        }
      ]
    },
    {
      "name": "志愿者管理",
      "elements": [
        {
          "type": "radiogroup",
          "name": "volunteer_management_division",
          "title": "在志愿者管理组中，您倾向于加入哪一分组？ *",
          "isRequired": true,
          "choices": [
            "文书组",
            "活动组"
          ]
        },
        {
          "type": "comment",
          "name": "volunteer_management_experience",
          "title": "请描述您最近参与活动的经验、担任的职位及角色。"
        },
        {
          "type": "comment",
          "name": "volunteer_subdivision",
          "title": "若专注于志愿者管理，您倾向于哪个小组？为什么？"
        },
        {
          "type": "comment",
          "name": "nezha_role",
          "title": "如果您是动画电影《哪吒2》中的角色，您会是谁？为什么？"
        }
      ]
    },
    {
      "name": "面试与可用性",
      "elements": [
        {
          "type": "checkbox",
          "name": "interview_slots",
          "title": "请选择您方便参加面试的时间 *",
          "isRequired": true,
          "choices": [
            "23/3（星期六）Slot A - 11am",
            "23/3（星期六）Slot B - 3pm",
            "23/3（星期六）Slot C - 5pm",
            "24/3（星期日）Slot A - 11am",
            "24/3（星期日）Slot B - 3pm",
            "24/3（星期日）Slot C - 5pm",
            "以上时间均不便，请安排线上面试"
          ]
        },
        {
          "type": "checkbox",
          "name": "major_events",
          "title": "请确认您是否能参加以下主要活动 *",
          "isRequired": true,
          "choices": [
            "2025年5月24日 | 迎新日",
            "2025年9月27日 | 年会前简报日",
            "2025年10月09日 | 彩排日（第一天）",
            "2025年10月10日 | 彩排日（第二天）",
            "2025年10月11日 | 年会当日",
            "2025年10月18日 | 庆功/感谢宴"
          ]
        }
      ]
    },
    {
      "name": "附加信息",
      "elements": [
        {
          "type": "text",
          "name": "location",
          "title": "您在2025年4月至10月期间主要居住/活动的地点是？"
        },
        {
          "type": "comment",
          "name": "crazy_experience",
          "title": "请描述您经历过的最疯狂或最有趣的事情，并说明原因。"
        },
        {
          "type": "comment",
          "name": "global_message",
          "title": "如果您能向全世界发送一条短信，您会写些什么？为什么？"
        },
        {
          "type": "comment",
          "name": "additional_info",
          "title": "请提供任何其他您希望我们了解的信息（例如：爱好、技能、特长等）。"
        }
      ]
    }
  ]
}