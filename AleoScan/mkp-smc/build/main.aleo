program leo_nft.aleo;

struct TokenId:
    data1 as u128;
    data2 as u128;

struct BaseURI:
    data0 as u128;
    data1 as u128;
    data2 as u128;
    data3 as u128;

struct SymbolBits:
    data as u128;

record NFT:
    owner as address.private;
    data as TokenId.private;
    edition as scalar.private;

record NFT_ownership:
    owner as address.private;
    nft_owner as address.private;
    data as TokenId.private;
    edition as scalar.private;


mapping nft_totals:
	key as field.public;
	value as u8.public;


mapping nft_owners:
	key as field.public;
	value as address.public;


mapping settings:
	key as u8.public;
	value as u128.public;


mapping whitelist:
	key as address.public;
	value as u8.public;

function initialize_collection:
    input r0 as u128.public;
    input r1 as u128.public;
    input r2 as BaseURI.public;
    assert.eq self.caller aleo1gy3d0s00s2k7rmgqznnx2q8htmjm2p5rk8q40u5yklqhe44utvys0dmzdy;
    async initialize_collection r0 r1 r2 into r3;
    output r3 as leo_nft.aleo/initialize_collection.future;

finalize initialize_collection:
    input r0 as u128.public;
    input r1 as u128.public;
    input r2 as BaseURI.public;
    get.or_use settings[0u8] 0u128 into r3;
    assert.eq r3 0u128;
    set 1u128 into settings[0u8];
    set r0 into settings[1u8];
    set 0u128 into settings[2u8];
    set r1 into settings[3u8];
    set r2.data0 into settings[4u8];
    set r2.data1 into settings[5u8];
    set r2.data2 into settings[6u8];
    set r2.data3 into settings[7u8];
    set 0u128 into settings[8u8];
    set 0u128 into settings[9u8];


function add_nft:
    input r0 as TokenId.public;
    input r1 as scalar.public;
    assert.eq self.caller aleo1gy3d0s00s2k7rmgqznnx2q8htmjm2p5rk8q40u5yklqhe44utvys0dmzdy;
    hash.bhp256 r0 into r2 as field;
    commit.bhp256 r2 r1 into r3 as field;
    async add_nft r3 into r4;
    output r4 as leo_nft.aleo/add_nft.future;

finalize add_nft:
    input r0 as field.public;
    get settings[9u8] into r1;
    assert.eq r1 0u128;
    get.or_use nft_totals[r0] 255u8 into r2;
    assert.eq r2 255u8;
    set 1u8 into nft_totals[r0];
    get settings[1u8] into r3;
    sub r3 1u128 into r4;
    set r4 into settings[1u8];


function add_minter:
    input r0 as address.public;
    input r1 as u8.public;
    assert.eq self.caller aleo1gy3d0s00s2k7rmgqznnx2q8htmjm2p5rk8q40u5yklqhe44utvys0dmzdy;
    async add_minter r0 r1 into r2;
    output r2 as leo_nft.aleo/add_minter.future;

finalize add_minter:
    input r0 as address.public;
    input r1 as u8.public;
    get settings[9u8] into r2;
    assert.eq r2 0u128;
    set r1 into whitelist[r0];


function set_mint_status:
    input r0 as u128.public;
    assert.eq self.caller aleo1gy3d0s00s2k7rmgqznnx2q8htmjm2p5rk8q40u5yklqhe44utvys0dmzdy;
    async set_mint_status r0 into r1;
    output r1 as leo_nft.aleo/set_mint_status.future;

finalize set_mint_status:
    input r0 as u128.public;
    get settings[9u8] into r1;
    assert.eq r1 0u128;
    set r0 into settings[2u8];


function set_mint_block:
    input r0 as u128.public;
    assert.eq self.caller aleo1gy3d0s00s2k7rmgqznnx2q8htmjm2p5rk8q40u5yklqhe44utvys0dmzdy;
    async set_mint_block r0 into r1;
    output r1 as leo_nft.aleo/set_mint_block.future;

finalize set_mint_block:
    input r0 as u128.public;
    get settings[9u8] into r1;
    assert.eq r1 0u128;
    set r0 into settings[8u8];


function update_symbol:
    input r0 as u128.public;
    assert.eq self.caller aleo1gy3d0s00s2k7rmgqznnx2q8htmjm2p5rk8q40u5yklqhe44utvys0dmzdy;
    async update_symbol r0 into r1;
    output r1 as leo_nft.aleo/update_symbol.future;

finalize update_symbol:
    input r0 as u128.public;
    get settings[9u8] into r1;
    assert.eq r1 0u128;
    set r0 into settings[3u8];


function update_base_uri:
    input r0 as BaseURI.public;
    assert.eq self.caller aleo1gy3d0s00s2k7rmgqznnx2q8htmjm2p5rk8q40u5yklqhe44utvys0dmzdy;
    async update_base_uri r0 into r1;
    output r1 as leo_nft.aleo/update_base_uri.future;

finalize update_base_uri:
    input r0 as BaseURI.public;
    get settings[9u8] into r1;
    assert.eq r1 0u128;
    set r0.data0 into settings[4u8];
    set r0.data1 into settings[5u8];
    set r0.data2 into settings[6u8];
    set r0.data3 into settings[7u8];


function freeze:
    assert.eq self.caller aleo1gy3d0s00s2k7rmgqznnx2q8htmjm2p5rk8q40u5yklqhe44utvys0dmzdy;
    async freeze into r0;
    output r0 as leo_nft.aleo/freeze.future;

finalize freeze:
    get settings[9u8] into r0;
    assert.eq r0 0u128;
    set 1u128 into settings[9u8];


function mint:
    input r0 as TokenId.public;
    input r1 as scalar.public;
    hash.bhp256 r0 into r2 as field;
    commit.bhp256 r2 r1 into r3 as field;
    cast self.caller r0 r1 into r4 as NFT.record;
    async mint self.caller r3 into r5;
    output r4 as NFT.record;
    output r5 as leo_nft.aleo/mint.future;

finalize mint:
    input r0 as address.public;
    input r1 as field.public;
    get settings[2u8] into r2;
    assert.eq r2 1u128;
    get whitelist[r0] into r3;
    sub r3 1u8 into r4;
    set r4 into whitelist[r0];
    get nft_totals[r1] into r5;
    sub r5 1u8 into r6;
    set r6 into nft_totals[r1];


function transfer_private:
    input r0 as NFT.record;
    input r1 as address.private;
    cast r1 r0.data r0.edition into r2 as NFT.record;
    output r2 as NFT.record;


function transfer_public:
    input r0 as address.private;
    input r1 as TokenId.private;
    input r2 as scalar.private;
    hash.bhp256 r1 into r3 as field;
    commit.bhp256 r3 r2 into r4 as field;
    async transfer_public r0 r4 self.caller into r5;
    output r5 as leo_nft.aleo/transfer_public.future;

finalize transfer_public:
    input r0 as address.public;
    input r1 as field.public;
    input r2 as address.public;
    get nft_owners[r1] into r3;
    assert.eq r2 r3;
    set r0 into nft_owners[r1];


function convert_private_to_public:
    input r0 as NFT.record;
    hash.bhp256 r0.data into r1 as field;
    commit.bhp256 r1 r0.edition into r2 as field;
    async convert_private_to_public r0.owner r2 into r3;
    output r3 as leo_nft.aleo/convert_private_to_public.future;

finalize convert_private_to_public:
    input r0 as address.public;
    input r1 as field.public;
    set r0 into nft_owners[r1];


function convert_public_to_private:
    input r0 as address.private;
    input r1 as TokenId.private;
    input r2 as scalar.private;
    assert.eq r0 self.caller;
    hash.bhp256 r1 into r3 as field;
    commit.bhp256 r3 r2 into r4 as field;
    cast r0 r1 r2 into r5 as NFT.record;
    async convert_public_to_private r0 r4 into r6;
    output r5 as NFT.record;
    output r6 as leo_nft.aleo/convert_public_to_private.future;

finalize convert_public_to_private:
    input r0 as address.public;
    input r1 as field.public;
    get nft_owners[r1] into r2;
    assert.eq r0 r2;
    set aleo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq3ljyzc into nft_owners[r1];


function prove_ownership:
    input r0 as NFT.record;
    input r1 as address.private;
    cast r0.owner r0.data r0.edition into r2 as NFT.record;
    cast r1 r0.owner r0.data r0.edition into r3 as NFT_ownership.record;
    output r2 as NFT.record;
    output r3 as NFT_ownership.record;
