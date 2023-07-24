export class RaceField {
    createBlockRaceField = ():void => {
        const raceField: HTMLElement = document.createElement('div');
        const main: HTMLElement | null = document.getElementById('main')
        const liPagination: HTMLElement = document.createElement('div');

        raceField.id = 'race-field'
        raceField.className = 'block-race-field'
        liPagination.className = 'block__li-pagination'
        if(main !== null) {
            main.append(raceField)
            main.append(liPagination);
        }
    }
}