export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

      {
        path: 'tenant',
        data: {
          menu: {
            title: 'general.menu.tenant',
            icon: 'ion-person',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'tenantList',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              }
            }
          },
          {
            path: 'addTenant',
            data: {
              menu: {
                title: 'general.menu.ck_editor1',
              }
            }
          },

        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-ios-people',
            selected: false,
            expanded: false,
            order: 800,
          }
        },
        children: [
          {
            path: 'allClubs',
            data: {
              menu: {
                title: 'general.menu.allClubs',
              }
            }
          },

          /* {
           path: 'inputs',
           data: {
           menu: {
           title: 'general.menu.new_club',
           }
           }
           },
           {
           path: 'reading',
           data: {
           menu: {
           title: 'general.menu.reading',
           }
           }
           },
           {
           path: 'chess',
           data: {
           menu: {
           title: 'general.menu.chess',
           }
           }
           },
           {
           path: 'triathen',
           data: {
           menu: {
           title: 'general.menu.triathen',
           }
           }
           },*/
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-help-buoy',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'product',
            data: {
              menu: {
                title: 'general.menu.product',
              }
            }
          },
          {
            path: 'services',
            data: {
              menu: {
                title: 'general.menu.services',
              }
            }
          },


        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maintenance',
            icon: 'ion-alert-circled',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [

          {
            path: 'pool_maintenance',
            data: {
              menu: {
                title: 'general.menu.pool_maintenance',
              }
            }
          },
          {
            path: 'playground_maintenance',
            data: {
              menu: {
                title: 'general.menu.playground_maintenance',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'expensesList',
            data: {
              menu: {
                title: 'general.menu.expensesList',
              }
            }
          },
          {
            path: 'addCommunityExpenses',
            data: {
              menu: {
                title: 'general.menu.addCommunityExpenses',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'addTenantPayment',
            data: {
              menu: {
                title: 'general.menu.addTenantPayment',
              }
            }
          },
          {
            path: 'payment',
            data: {
              menu: {
                title: 'general.menu.payment',
              }
            }
          },

        ]
      },
      {
        path: 'reportEmg',
        data: {
          menu: {
            title: 'general.menu.reportEmg',
            icon: 'ion-ios-telephone',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'emergency',
            data: {
              menu: {
                title: 'general.menu.emergency',
              }
            }
          },

        ]
      },

      {
        path: 'ui',
        data: {
          menu: {
            title: 'general.menu.ui_features',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
      }
      /* children: [
       {
       path: 'typography',
       data: {
       menu: {
       title: 'general.menu.typography',
       }
       }
       },
       {
       path: 'buttons',
       data: {
       menu: {
       title: 'general.menu.buttons',
       }
       }
       },
       {
       path: 'icons',
       data: {
       menu: {
       title: 'general.menu.icons',
       }
       }
       },
       {
       path: 'modals',
       data: {
       menu: {
       title: 'general.menu.modals',
       }
       }
       },
       {
       path: 'slim',
       data: {
       menu: {
       title: 'Slim loading bar',
       }
       }
       },
       {
       path: 'grid',
       data: {
       menu: {
       title: 'general.menu.grid',
       }
       }
       },
       ]
       },*/

      /*
       {
       path: 'maps',
       data: {
       menu: {
       title: 'general.menu.maps',
       icon: 'ion-ios-location-outline',
       selected: false,
       expanded: false,
       order: 600,
       }
       },
       children: [
       {
       path: 'googlemaps',
       data: {
       menu: {
       title: 'general.menu.google_maps',
       }
       }
       },
       {
       path: 'leafletmaps',
       data: {
       menu: {
       title: 'general.menu.leaflet_maps',
       }
       }
       },
       {
       path: 'bubblemaps',
       data: {
       menu: {
       title: 'general.menu.bubble_maps',
       }
       }
       },
       {
       path: 'linemaps',
       data: {
       menu: {
       title: 'general.menu.line_maps',
       }
       }
       }
       ]
       },
       {
       path: '',
       data: {
       menu: {
       title: 'general.menu.pages',
       icon: 'ion-document',
       selected: false,
       expanded: false,
       order: 650,
       }
       },
       children: [
       {
       path: ['/login'],
       data: {
       menu: {
       title: 'general.menu.login'
       }
       }
       },
       {
       path: ['/register'],
       data: {
       menu: {
       title: 'general.menu.register'
       }
       }
       }
       ]
       },
       {
       path: '',
       data: {
       menu: {
       title: 'general.menu.menu_level_1',
       icon: 'ion-ios-more',
       selected: false,
       expanded: false,
       order: 700,
       }
       },
       children: [
       {
       path: '',
       data: {
       menu: {
       title: 'general.menu.menu_level_1_1',
       url: '#'
       }
       }
       },
       {
       path: '',
       data: {
       menu: {
       title: 'general.menu.menu_level_1_2',
       url: '#'
       }
       },
       children: [
       {
       path: '',
       data: {
       menu: {
       title: 'general.menu.menu_level_1_2_1',
       url: '#'
       }
       }
       }
       ]
       }
       ]
       },
       {
       path: '',
       data: {
       menu: {
       title: 'general.menu.external_link',
       url: 'http://akveo.com',
       icon: 'ion-android-exit',
       order: 800,
       target: '_blank'
       }
       }
       }*/
    ]
  }
];
