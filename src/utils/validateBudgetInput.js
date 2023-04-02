export const validateBudgetInput = (input) => {
    const errors = {};

    if (!input.budgetInput) {
        return;
    }

    // Define RegEx Here
    const regExGreaterThanZero = /^[1-9]/;
    const regExCommaPresence = /\,/;
    const regExCommaUse = /^[0-9]{1,3}(,[0-9]{3})+(\.\d\d)?$/;
    const regExPeriodPresence = /\./;
    const regExPeriodUse = /^(\d\,?)+\.\d\d$/;
    const regExDigitsOnly = /[^\d\,\.]/;

    // Test if input is less than 1, or if the initial number is a 0
    if ((input.budgetInput < 1) || (!(regExGreaterThanZero.exec(input.budgetInput)))) {
        errors.budgetInput = 'You must enter a budget greater than $1';
    }

    // If commas exist, then check that it's used properly (with 1-3 digits before it and exactly 3 digits after it).
    if ((regExCommaPresence.exec(input.budgetInput)) && (!(regExCommaUse.exec(input.budgetInput)))) {

        // We also need to test if the ending has a period, because we don't want 1,234.56 to be an invalid input.
        // The first if statement will test if the period is used properly.
        // Otherwise, the period is used properly and the issue is the comma.
        if ((regExPeriodPresence.exec(input.budgetInput)) && (!(regExPeriodUse.exec(input.budgetInput)))) {
            errors.budgetInput = 'Only valid numerical inputs are allowed (fix the periods!)';
        } else {
            errors.budgetInput = 'Only valid numerical inputs are allowed (fix the commas!)';
        }
    }

    // If there is a period, we want to make sure that there is only one period with exactly 2 digits after it.
    if ((regExPeriodPresence.exec(input.budgetInput)) && (!(regExPeriodUse.exec(input.budgetInput)))) {
        errors.budgetInput = 'Only valid numerical inputs are allowed (fix the periods!)';
    }

    // If there is anything entered other than digits, commas, or periods, it's an invalid entry.
    if (regExDigitsOnly.exec(input.budgetInput)) {
        errors.budgetInput = 'Only valid numerical inputs are allowed';
    }

    return errors;
}