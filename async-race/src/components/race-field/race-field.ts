export class RaceField {
    createBlockRaceField = ():void => {
        const raceField: HTMLElement = document.createElement('div');
        const main: HTMLElement | null = document.getElementById('main')
        const liPagination: HTMLElement = document.createElement('div');
        const blockCountPagesAndCars: HTMLElement = document.createElement('div');
        const countPages: HTMLElement = document.createElement('span');
        const countCars: HTMLElement = document.createElement('span');
        const ul = document.createElement('ul')

        raceField.id = 'race-field'
        raceField.className = 'block-race-field'
        liPagination.className = 'block__li-pagination'
        blockCountPagesAndCars.className = 'block-count'
        countPages.className = 'block-count__page'
        countCars.className = 'block-count_cars'
        ul.className = 'list'

        if(main !== null) {
            main.append(raceField)
            raceField.append(blockCountPagesAndCars)
            blockCountPagesAndCars.append(countCars)
            blockCountPagesAndCars.append(countPages)
            main.append(liPagination);
            liPagination.append(ul)
        }
    }
}