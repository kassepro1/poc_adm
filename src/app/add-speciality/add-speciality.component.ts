import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {merge} from 'rxjs';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import { MatInputModule } from '@angular/material/input';
// @ts-ignore
import { angularMaterialRenderers } from '@jsonforms/angular-material';

@Component({
  selector: 'app-add-speciality',
  templateUrl: './add-speciality.component.html',
  styleUrl: './add-speciality.component.css'
})
export class AddSpecialityComponent {
  // @ts-ignore
  @Input() item: boolean;
/*  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';*/
  public profileForm: any;
  public description: any;
  public name: any;
  constructor(public dialog: MatDialog,private formBuilder: FormBuilder) {
    this.profileForm = formBuilder.group({
      name: new FormControl(''),
      description: new FormControl(''),
    });
    /*merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());*/
  }

 /* updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }*/
  renderers = angularMaterialRenderers;
  uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        label: false,
        scope: '#/properties/done',
      },
      {
        type: 'Control',
        scope: '#/properties/name',
      },
      {
        type: 'HorizontalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/due_date',
          },
          {
            type: 'Control',
            scope: '#/properties/recurrence',
          },
        ],
      },
    ],
  };
  schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1,
      },
      done: {
        type: 'boolean',
      },
      due_date: {
        type: 'string',
        format: 'date',
      },
      recurrence: {
        type: 'string',
        enum: ['Never', 'Daily', 'Weekly', 'Monthly'],
      },
    },
    required: ['name', 'due_date'],
  };
  data = {};

  schama2 = {
    "type": "object",
    "properties": {
      "resourceType": { "type": "string" },
      "id": { "type": "string" },
      "identifier": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "use": { "type": "string" },
            "system": { "type": "string" },
            "value": { "type": "string" }
          }
        }
      },
      "active": { "type": "boolean" },
      "providedBy": {
        "type": "object",
        "properties": {
          "reference": { "type": "string" },
          "display": { "type": "string" }
        }
      },
      "offeredIn": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "reference": { "type": "string" },
            "display": { "type": "string" }
          }
        }
      },
      "category": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "coding": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "code": { "type": "string" },
                  "display": { "type": "string" }
                }
              }
            },
            "text": { "type": "string" }
          }
        }
      },
      "type": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "coding": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "code": { "type": "string" },
                  "display": { "type": "string" }
                }
              }
            },
            "text": { "type": "string" }
          }
        }
      },
      "specialty": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "coding": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "code": { "type": "string" },
                  "display": { "type": "string" }
                }
              }
            },
            "text": { "type": "string" }
          }
        }
      },
      "location": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "reference": { "type": "string" },
            "display": { "type": "string" }
          }
        }
      },
      "name": { "type": "string" },
      "comment": { "type": "string" },
      "extraDetails": { "type": "string" },
      "photo": {
        "type": "object",
        "properties": {
          "contentType": { "type": "string" },
          "url": { "type": "string" }
        }
      },
      "contact": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "purpose": {
              "type": "object",
              "properties": {
                "coding": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "system": { "type": "string" },
                      "code": { "type": "string" },
                      "display": { "type": "string" }
                    }
                  }
                },
                "text": { "type": "string" }
              }
            },
            "name": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "use": { "type": "string" },
                  "text": { "type": "string" },
                  "family": { "type": "string" },
                  "given": {
                    "type": "array",
                    "items": { "type": "string" }
                  }
                }
              }
            },
            "telecom": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "value": { "type": "string" },
                  "use": { "type": "string" }
                }
              }
            },
            "address": {
              "type": "object",
              "properties": {
                "use": { "type": "string" },
                "type": { "type": "string" },
                "text": { "type": "string" },
                "line": {
                  "type": "array",
                  "items": { "type": "string" }
                },
                "city": { "type": "string" },
                "state": { "type": "string" },
                "postalCode": { "type": "string" },
                "country": { "type": "string" }
              }
            },
            "organization": {
              "type": "object",
              "properties": {
                "reference": { "type": "string" },
                "display": { "type": "string" }
              }
            },
            "period": {
              "type": "object",
              "properties": {
                "start": { "type": "string", "format": "date-time" },
                "end": { "type": "string", "format": "date-time" }
              }
            }
          }
        }
      },
      "coverageArea": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "reference": { "type": "string" },
            "display": { "type": "string" }
          }
        }
      },
      "serviceProvisionCode": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "coding": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "code": { "type": "string" },
                  "display": { "type": "string" }
                }
              }
            },
            "text": { "type": "string" }
          }
        }
      },
      "eligibility": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "code": {
              "type": "object",
              "properties": {
                "coding": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "system": { "type": "string" },
                      "code": { "type": "string" },
                      "display": { "type": "string" }
                    }
                  }
                },
                "text": { "type": "string" }
              }
            },
            "comment": { "type": "string" }
          }
        }
      },
      "program": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "coding": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "code": { "type": "string" },
                  "display": { "type": "string" }
                }
              }
            },
            "text": { "type": "string" }
          }
        }
      },
      "characteristic": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "coding": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "code": { "type": "string" },
                  "display": { "type": "string" }
                }
              }
            },
            "text": { "type": "string" }
          }
        }
      },
      "communication": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "coding": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "code": { "type": "string" },
                  "display": { "type": "string" }
                }
              }
            },
            "text": { "type": "string" }
          }
        }
      },
      "referralMethod": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "coding": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "system": { "type": "string" },
                  "code": { "type": "string" },
                  "display": { "type": "string" }
                }
              }
            },
            "text": { "type": "string" }
          }
        }
      },
      "appointmentRequired": { "type": "boolean" },
      "availability": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "availableTime": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "daysOfWeek": {
                    "type": "array",
                    "items": { "type": "string" }
                  },
                  "allDay": { "type": "boolean" }
                }
              }
            },
            "notAvailable": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "description": { "type": "string" },
                  "during": {
                    "type": "object",
                    "properties": {
                      "start": { "type": "string", "format": "date-time" },
                      "end": { "type": "string", "format": "date-time" }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "endpoint": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "reference": { "type": "string" },
            "display": { "type": "string" }
          }
        }
      }
    }
  };


  saveSpeciality() {
    console.log(this.profileForm.value)
  }
}
