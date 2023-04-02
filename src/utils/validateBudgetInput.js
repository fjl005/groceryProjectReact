export const validateBudgetInput = (input) => {
    const errors = {};

    if (!input.budgetInput) {
        return;
    }

    const regExGreaterThanZero = /^[1-9]/;

    if ((input.budgetInput < 1) || (!(regExGreaterThanZero.exec(input.budgetInput)))) {
        errors.budgetInput = 'You must enter a budget greater than $1';
    }

    const regExCommaPresence = /\,/;
    const regExCommaUse = /^[0-9]{1,3}(,[0-9]{3})+$/;

    if ((regExCommaPresence.exec(input.budgetInput)) && (!(regExCommaUse.exec(input.budgetInput)))) {
        errors.budgetInput = 'Only valid numerical inputs are allowed (fix the commas!)';
    }

    const regExPeriodPresence = /\./;
    const regExPeriodUse = /^\d+\.\d\d$/;
    if ((regExPeriodPresence.exec(input.budgetInput)) && (!(regExPeriodUse.exec(input.budgetInput)))) {
        errors.budgetInput = 'Only valid numerical inputs are allowed (fix the periods!)';
    }


    const regExDigitsOnly = /[^\d\,\.]/;
    if (regExDigitsOnly.exec(input.budgetInput)) {
        errors.budgetInput = 'Only valid numerical inputs are allowed';
    }

    return errors;
}