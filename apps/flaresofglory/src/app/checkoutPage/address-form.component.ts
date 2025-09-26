import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, Validators } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: "app-address-form",
  imports: [MatAutocompleteModule, MatFormFieldModule, FormsModule],
  template: `<mat-form-field appearance="outline" style="flex: 1">
      <mat-label>Full Name</mat-label>
      <input matInput formControlName="name" />
    </mat-form-field>
    <mat-form-field appearance="outline" style="flex: 1">
      <mat-label>Email</mat-label>
      <input matInput formControlName="email" type="email" placeholder="you@example.com" />
    </mat-form-field>
    <mat-form-field appearance="outline" style="flex: 1">
      <mat-label>Address Line 1</mat-label>
      <input matInput formControlName="address" />
    </mat-form-field>
    <mat-form-field appearance="outline" style="flex: 1" hideRequiredMarker="true">
      <mat-label>Address Line 2</mat-label>
      <input matInput formControlName="address2" placeholder="Apt, Suite, Unit Number, Etc" />
    </mat-form-field>
    <mat-form-field appearance="outline" style="flex: 1">
      <mat-label>City</mat-label>
      <input matInput formControlName="city" />
    </mat-form-field>
    <mat-form-field appearance="outline" style="flex: 1">
      <mat-label>State</mat-label>
      <input
        type="text"
        placeholder="Pick a state"
        aria-label="State"
        matInput
        formControlName="state"
        #autocompleteInput
        (input)="filter()"
        (focus)="filter()"
        [matAutocomplete]="auto"
      />
      <mat-autocomplete requireSelection #auto="matAutocomplete">
        <mat-option *ngFor="let state of filteredStates" [value]="state">
          {{ state }}
        </mat-option>
      </mat-autocomplete>
    </mat-form-field>
    <mat-form-field appearance="outline" style="flex: 1">
      <mat-label>ZIP Code</mat-label>
      <input matInput formControlName="zipcode" />
    </mat-form-field>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
  private readonly fb = inject(FormBuilder);

  @ViewChild("autocompleteInput") autocompleteInput: ElementRef<HTMLInputElement>;

  public states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  public filteredStates: string[] = this.states;

  checkoutForm: FormGroup = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    address: ["", [Validators.required]],
    address2: ["", []],
    zipcode: ["", [Validators.required]],
    city: ["", [Validators.required]],
    state: ["", [Validators.required]],
    amount: [0, [Validators.required, Validators.pattern(/\d+/)]],
  });

  filter() {
    const filterValue = this.autocompleteInput.nativeElement.value.toLowerCase();
    this.filteredStates = this.states.filter((state) => state.toLowerCase().includes(filterValue));
  }

  clear() {
    this.checkoutForm.patchValue({
      name: "",
      email: "",
      address: "",
      address2: "",
      zipcode: "",
      city: "",
      state: "",
    });
  }
}
