export interface RequestResponse<T> {
    status: number;
    success: boolean;
    message: string;
    data: T;
}
