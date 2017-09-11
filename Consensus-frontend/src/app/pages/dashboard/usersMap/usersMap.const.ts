import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, layoutPaths} from '../../../theme';

export class UsersMapConst {
  public static satelite = [
    {
      "mapTypeId" : "satellite"
    }
  ];
  public static google_map_style =
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];

  public static map_sample_data = [
    {
        "project_title" : "project b title",
        "topic_tag" : "Resilient Ecosystems",
        "lab_type" : "Living Lab",
        "start_date" : "6/7/2016",
        "end_date" : "4/4/2017",
        "research_problem" : "How many solar panels would fit on existing roofs and how much would they cost?",
        "solution" : "This is a text description and is not currently displayed in the design",
        "the_players" : "This is the text that appears in the detailed project card. It will provide high level invofrmation about the parties involved in the project.",
        "number_of_players" : 10,
        "team_diversity" : "AO",
        "the_story" : "This is the story description that appears in the detailed project card. It will provide a few sentences to explain the project at a high level.",
        "the_place" : "This is a text description of the place(s) where the research happens",
        "building_number" : 46,
        "hash_tag" : "#projectb",
        "originator1" : "Faculty",
        "originator2" : "",
        "latitude" : 42.361393,
        "longitude" : -71.082788,
        "data_collected" : true,
        "lab_center_institute" : "lab name abc",
        "department" : "Materials Science and Engineering",
        "principal_investigator" : "firstname lastname",
        "OutcomeScore" : 10,
        "sci_researchers" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "post_docs" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "urops" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "fellows" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "o1_award" : false,
        "o2_behavior_change" : true,
        "o3_book" : false,
        "o4_community_resource" : false,
        "o5_company" : true,
        "o6_course" : false,
        "o7_data_decision" : true,
        "o10_feasibility_study" : false,
        "o11_internship" : false,
        "o12_invention" : false,
        "o13_news_media" : true,
        "o14_pilot_program" : false,
        "o15_policy_change" : false,
        "o16_performance" : false,
        "o17_pub_present" : false,
        "o18_research_article" : false,
        "o19_savings" : false,
        "o20_software" : false,
        "o21_funding" : false,
        "o22_org_change" : false,
        "o23_informal_learn" : true,
        "o24_co2_reduction" : false,
        "o25_new_tech" : false,
        "media" : [
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_2.png",
                "thumb_url" : "http://52.77.235.190/sample_2.png"
            },
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_3.png",
                "thumb_url" : "http://52.77.235.190/sample_3.png"
            },
            {
                "media_type" : "video",
                "media_url" : "http://52.77.235.190/sample_1.mp4",
                "thumb_url" : "http://52.77.235.190/sample_4.png"
            }
        ]
    },
    {
        "project_title" : "project c title",
        "topic_tag" : "Material Lifecycles",
        "lab_type" : "Lablet",
        "start_date" : "1/5/2017",
        "end_date" : "2/2/2016",
        "research_problem" : "How many solar panels would fit on existing roofs and how much would they cost?",
        "solution" : "This is a text description and is not currently displayed in the design",
        "the_players" : "This is the text that appears in the detailed project card. It will provide high level invofrmation about the parties involved in the project.",
        "number_of_players" : 2,
        "team_diversity" : "E",
        "the_story" : "This is the story description that appears in the detailed project card. It will provide a few sentences to explain the project at a high level.",
        "the_place" : "This is a text description of the place(s) where the research happens",
        "building_number" : 72,
        "hash_tag" : "#projectc",
        "originator1" : "Student Originated Research",
        "originator2" : "",
        "latitude" : 42.358127,
        "longitude" : -71.094825,
        "OutcomeScore" : 10,
        "data_collected" : true,
        "lab_center_institute" : "lab name xyz",
        "department" : "D-Lab",
        "principal_investigator" : "firstname lastname",
        "sci_researchers" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "post_docs" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "urops" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "fellows" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "o1_award" : false,
        "o2_behavior_change" : false,
        "o3_book" : false,
        "o4_community_resource" : false,
        "o5_company" : false,
        "o6_course" : false,
        "o7_data_decision" : false,
        "o10_feasibility_study" : false,
        "o11_internship" : false,
        "o12_invention" : false,
        "o13_news_media" : false,
        "o14_pilot_program" : true,
        "o15_policy_change" : false,
        "o16_performance" : false,
        "o17_pub_present" : false,
        "o18_research_article" : false,
        "o19_savings" : false,
        "o20_software" : false,
        "o21_funding" : false,
        "o22_org_change" : false,
        "o23_informal_learn" : false,
        "o24_co2_reduction" : false,
        "o25_new_tech" : false,
        "media" : [
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_3.png",
                "thumb_url" : "http://52.77.235.190/sample_3.png"
            },
            {
                "media_type" : "video",
                "media_url" : "http://52.77.235.190/sample.mp4",
                "thumb_url" : "http://52.77.235.190/sample_2.png"
            },
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_5.png",
                "thumb_url" : "http://52.77.235.190/sample_5.png"
            }
        ]
    },
    {
        "project_title" : "project e title",
        "topic_tag" : "Healthy People",
        "lab_type" : "Lablet",
        "start_date" : "3/5/2017",
        "end_date" : "7/26/2017",
        "research_problem" : "How many solar panels would fit on existing roofs and how much would they cost?",
        "solution" : "This is a text description and is not currently displayed in the design",
        "the_players" : "This is the text that appears in the detailed project card. It will provide high level invofrmation about the parties involved in the project.",
        "number_of_players" : 25,
        "team_diversity" : "AEO",
        "the_story" : "This is the story description that appears in the detailed project card. It will provide a few sentences to explain the project at a high level.",
        "the_place" : "This is a text description of the place(s) where the research happens",
        "building_number" : 32,
        "OutcomeScore" : 10,
        "hash_tag" : "#projectd",
        "originator1" : "Staff",
        "originator2" : "External Partners",
        "latitude" : 42.355047,
        "longitude" : -71.103258,
        "data_collected" : false,
        "lab_center_institute" : "lab name def",
        "department" : "Aerospace Studies",
        "principal_investigator" : "firstname lastname",
        "sci_researchers" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "post_docs" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "urops" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "fellows" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "o1_award" : true,
        "o2_behavior_change" : false,
        "o3_book" : true,
        "o4_community_resource" : false,
        "o5_company" : true,
        "o6_course" : false,
        "o7_data_decision" : false,
        "o10_feasibility_study" : false,
        "o11_internship" : true,
        "o12_invention" : false,
        "o13_news_media" : false,
        "o14_pilot_program" : false,
        "o15_policy_change" : false,
        "o16_performance" : false,
        "o17_pub_present" : false,
        "o18_research_article" : true,
        "o19_savings" : false,
        "o20_software" : false,
        "o21_funding" : false,
        "o22_org_change" : false,
        "o23_informal_learn" : false,
        "o24_co2_reduction" : false,
        "o25_new_tech" : true,
        "media" : [
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_4.png",
                "thumb_url" : "http://52.77.235.190/sample_4.png"
            },
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_1.png",
                "thumb_url" : "http://52.77.235.190/sample_1.png"
            },
            {
                "media_type" : "video",
                "media_url" : "http://52.77.235.190/sample_1.mp4",
                "thumb_url" : "http://52.77.235.190/sample_6.png"
            },
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_5.png",
                "thumb_url" : "http://52.77.235.190/sample_5.png"
            }
        ]
    },
    {
        "project_title" : "project f title",
        "topic_tag" : "Thriving Networks",
        "lab_type" : "Living Lab",
        "start_date" : "5/7/2017",
        "end_date" : "7/26/2017",
        "research_problem" : "How many solar panels would fit on existing roofs and how much would they cost?",
        "solution" : "This is a text description and is not currently displayed in the design",
        "the_players" : "This is the text that appears in the detailed project card. It will provide high level invofrmation about the parties involved in the project.",
        "number_of_players" : 4,
        "OutcomeScore" : 10,
        "team_diversity" : "AEO",
        "the_story" : "This is the story description that appears in the detailed project card. It will provide a few sentences to explain the project at a high level.",
        "the_place" : "This is a text description of the place(s) where the research happens",
        "building_number" : 1,
        "hash_tag" : "#projecte",
        "originator1" : "Faculty",
        "originator2" : "Student Originated Research",
        "latitude" : 42.361738,
        "longitude" : -71.090512,
        "data_collected" : true,
        "lab_center_institute" : "lab name bcd",
        "department" : "Physics",
        "principal_investigator" : "firstname lastname",
        "sci_researchers" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "post_docs" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "urops" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "fellows" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "o1_award" : false,
        "o2_behavior_change" : false,
        "o3_book" : false,
        "o4_community_resource" : true,
        "o5_company" : false,
        "o6_course" : false,
        "o7_data_decision" : false,
        "o10_feasibility_study" : false,
        "o11_internship" : true,
        "o12_invention" : false,
        "o13_news_media" : false,
        "o14_pilot_program" : false,
        "o15_policy_change" : false,
        "o16_performance" : false,
        "o17_pub_present" : true,
        "o18_research_article" : true,
        "o19_savings" : false,
        "o20_software" : false,
        "o21_funding" : false,
        "o22_org_change" : false,
        "o23_informal_learn" : false,
        "o24_co2_reduction" : false,
        "o25_new_tech" : false,
        "media" : [
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_5.png",
                "thumb_url" : "http://52.77.235.190/sample_5.png"
            },
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_6.png",
                "thumb_url" : "http://52.77.235.190/sample_6.png"
            },
            {
                "media_type" : "video",
                "media_url" : "http://52.77.235.190/sample_0.mp4",
                "thumb_url" : "http://52.77.235.190/sample_6.png"
            },
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_3.png",
                "thumb_url" : "http://52.77.235.190/sample_3.png"
            }
        ]
    },
    {
        "project_title" : "project a title",
        "topic_tag" : "Low Carbon Campus",
        "lab_type" : "Living Lab",
        "start_date" : "2014-12-31T16:00:00.000Z",
        "end_date" : "2016-02-01T16:00:00.000Z",
        "research_problem" : "How many solar panels would fit on existing roofs and how much would they cost?",
        "solution" : "This is a text description and is not currently displayed in the design",
        "the_players" : "This is the text that appears in the detailed project card. It will provide high level invofrmation about the parties involved in the project.",
        "number_of_players" : 4,
        "OutcomeScore" : 10,
        "team_diversity" : "AE",
        "the_story" : "This is the story description that appears in the detailed project card. It will provide a few sentences to explain the project at a high level.",
        "the_place" : "This is a text description of the place(s) where the research happens",
        "building_number" : 32,
        "hash_tag" : "#projecta",
        "originator1" : "Administrators",
        "originator2" : "External Partners",
        "latitude" : 42.360091,
        "longitude" : -71.09416,
        "data_collected" : true,
        "lab_center_institute" : "lab name a",
        "department" : "Biology",
        "principal_investigator" : "firstname lastname",
        "o1_award" : true,
        "o2_behavior_change" : false,
        "o3_book" : true,
        "o4_community_resource" : true,
        "o5_company" : true,
        "o6_course" : true,
        "o7_data_decision" : true,
        "o10_feasibility_study" : false,
        "o11_internship" : false,
        "o12_invention" : false,
        "o13_news_media" : false,
        "o14_pilot_program" : false,
        "o15_policy_change" : false,
        "o16_performance" : false,
        "o17_pub_present" : false,
        "o18_research_article" : true,
        "o19_savings" : false,
        "o20_software" : false,
        "o21_funding" : false,
        "o22_org_change" : false,
        "o23_informal_learn" : false,
        "o24_co2_reduction" : false,
        "o25_new_tech" : true,
        "fellows" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "urops" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "post_docs" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "sci_researchers" : [
            "firstname lastname",
            "firstname2 lastname2",
            "firstname3 lastname3"
        ],
        "media" : [
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_0.png",
                "thumb_url" : "http://52.77.235.190/sample_0.png"
            },
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_1.png",
                "thumb_url" : "http://52.77.235.190/sample_1.png"
            },
            {
                "media_type" : "video",
                "media_url" : "http://52.77.235.190/sample.mp4",
                "thumb_url" : "http://52.77.235.190/sample_6.png"
            },
            {
                "media_type" : "image",
                "media_url" : "http://52.77.235.190/sample_2.png",
                "thumb_url" : "http://52.77.235.190/sample_2.png"
            }
        ]
    }

  ];
}
