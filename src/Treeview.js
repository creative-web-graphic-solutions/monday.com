import TreeView from 'react-expandable-treeview';

const data = [
    {
        id: 0,
        label: 'A Father',
        children: [
            {
                id: 1,
                label: 'A Son'
            },
            {
                id: 2,
                label: 'Another Son'
            }
        ],
        id: 3,
        label: 'Another Father',
        children: [
            {
                id: 4,
                children: [
                    {
                        id: 5,
                        label: 'Yet Another Son',
                    }
                ]
            }
        ]
    }
]

