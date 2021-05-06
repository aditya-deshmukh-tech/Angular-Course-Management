import { AbstractControl, ValidationErrors } from '@angular/forms';

export class SpaceValodators{
    static canNotContainSpace(controls: AbstractControl): ValidationErrors | null{
        if((controls.value as String).indexOf(' ') >= 0){
            return {space: true};
        }
        return null;
    }
}