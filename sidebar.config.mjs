import starlightSidebarTopics from 'starlight-sidebar-topics'

export const sidebarTopics = starlightSidebarTopics([
    {label: 'Вступ', link: '/structure', icon: 'open-book', items: ['structure']},
    {label: 'Сервіси', link: '/serv', icon: 'seti:salesforce',
        items: [
            {label: 'Менеджери контейнерів',
                items: [
                    {label: 'Portainer', link: 'project/portainer',},
                    {label: 'Watchtower', link: 'project/watchtower',},
                    {label: 'Arcane', link: 'project/arcane',},
                ],
            },
        ],
    },
]);