export class Winners {

    creatBlockTableWinners = () => {
        const blockMenu: HTMLElement | null = document.getElementById('menu');
        if(blockMenu !== null) {
            const blockWinners: HTMLElement = document.createElement('div'); 
            const counterWinners:HTMLElement = document.createElement('span');
            const counterPage: HTMLElement = document.createElement('span');
            const blockWinnersTable: HTMLElement = document.createElement('div');

            blockWinners.className = "menu__block-winners"
            counterWinners.className = "menu__counter-winners"
            counterPage.className = "menu__counter-page"
            blockWinnersTable.className = "menu__block-table"

            blockWinners.classList.add('block--none')
            // counterPage.classList.add('block--none')
            // blockWinnersTable.classList.add('block--none')

            
            counterWinners.innerText = 'Winners (0)'
            counterPage.innerText = 'Page #1'

            blockMenu.append(blockWinners)
            blockWinners.append(counterWinners)
            blockWinners.append(counterPage)
            blockWinners.append(blockWinnersTable)
            this.creatTableWinners(blockWinnersTable)
            
            
        }
    }
    creatTableWinners = (blockTable:HTMLElement) => {
        const table: HTMLElement = document.createElement('div'); 
        const blockNumber: HTMLElement = document.createElement('div'); 
        const blockCar: HTMLElement = document.createElement('div'); 
        const blockName: HTMLElement = document.createElement('div'); 
        const blockWins: HTMLElement = document.createElement('div'); 
        const blockTime: HTMLElement = document.createElement('div');

        const headersNumber: HTMLElement = document.createElement('span'); 
        const headersCar: HTMLElement = document.createElement('span'); 
        const headersName: HTMLElement = document.createElement('span'); 
        const headersWins: HTMLElement = document.createElement('span'); 
        const headersTime: HTMLElement = document.createElement('span');  
          
        table.className = 'block-table__table'
        blockNumber.className = 'table-item table__number'
        blockCar.className = 'table-item table__car'
        blockName.className = 'table-item table__name'
        blockWins.className = 'table-item table__wins'
        blockTime.className = 'table-item table__time'

        headersNumber.className = 'table__header'
        headersCar.className = 'table__header'
        headersName.className = 'table__header'
        headersWins.className = 'table__header'
        headersTime.className = 'table__header'

        headersNumber.innerText = '№'
        headersCar.innerText = 'Car'
        headersName.innerText = 'Name'
        headersWins.innerText = 'Wins'
        headersTime.innerText = 'Time'

        blockTable.append(table)
        table.append(blockNumber)
        table.append(blockCar)
        table.append(blockName)
        table.append(blockWins)
        table.append(blockTime)

        blockNumber.append(headersNumber)
        blockCar.append(headersCar)
        blockName.append(headersName)
        blockWins.append(headersWins)
        blockTime.append(headersTime)


    }
}