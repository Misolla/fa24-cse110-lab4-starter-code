import { Response } from 'express';

// Function to get the budget
export function getBudget(res: Response, budget: number) {
    res.status(200).send({ "data": budget });
}

// Function to update the budget
export function updateBudget(res: Response, body: any, budget: { amount: number }) {
    const { amount } = body;

    if (amount < 0) {
        return res.status(400).send({ error: "Too low budget" });
    }

    budget.amount = amount;
    res.status(201).send(String(budget.amount));
}
