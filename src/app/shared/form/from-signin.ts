import { FormGroup, FormControl, Validators } from "@angular/forms";

export var FormGroupSignin = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
});