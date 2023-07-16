export class RaceField {
    createBlockRaceField = ():void => {
        const raceField: HTMLElement = document.createElement('div');
        const main: HTMLElement | null = document.getElementById('main')

        raceField.id = 'race-field'
        raceField.className = 'block-race-field'
        if(main !== null) {
            main.append(raceField);
        }
    }
}