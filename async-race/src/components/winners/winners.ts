export class Winners {

    creatBlockTableWinners = () => {
        const blockMenu: HTMLElement | null = document.getElementById('menu');
        if(blockMenu !== null) {
            const blockWinners: HTMLElement = document.createElement('div'); 
            const counterWinners:HTMLElement = document.createElement('span');
            const counterPage: HTMLElement = document.createElement('span');
            const blockWinnersTable: HTMLElement = document.createElement('div');

            blockWinners.className = "menu__block-winners"
            counterWinners.className = "menu__couner-winners"
            counterPage.className = "menu__couner-page"
            blockWinnersTable.className = "menu__block-table"

            blockWinners.classList.add('block--none')
            // counterPage.classList.add('block--none')
            // blockWinnersTable.classList.add('block--none')

            blockMenu.append(blockWinners)
            blockWinners.append(counterWinners)
            blockWinners.append(counterPage)
            blockWinners.append(blockWinnersTable)
            
            
        }
    }
}