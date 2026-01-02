export interface WhatsAppNumber {
    id: string;
    number: string;
    is_active: boolean;
    click_count: number;
    created_at: string;
    updated_at: string;
}

export interface DiamondExchangeState {
    activeWhatsAppNumber: WhatsAppNumber | null;
    loading: boolean;
    fetched: boolean;
    error: string | null;
    clickLoading: boolean;
}
