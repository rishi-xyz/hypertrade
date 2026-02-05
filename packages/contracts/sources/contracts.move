module 0x0::hypertrade_vault {
    use deepbook::pool;
    use deepbook::pool::Pool;

    public fun is_pool_whitelisted<BaseAsset,QuoteAsset>(pool_ref : &Pool<BaseAsset,QuoteAsset>): bool {
        pool::whitelisted<BaseAsset,QuoteAsset>(pool_ref)
    }
}