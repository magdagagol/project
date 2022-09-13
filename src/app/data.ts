export interface Data {
    work_order_id: number;
    description: string;
    received_date: Date;
    assigned_to: Person[];
    status: string;
    priority: string;
}

export interface Person {
    person_name: string;
    status: string;
}