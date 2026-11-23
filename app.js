/* ==========================================================================
       1. Curated Gift Database (실제 한국 선물 문화 & 카카오톡 선물하기 인기 선물)
       ========================================================================== */
    const GIFT_DATABASE = [
      /* 1. 1만 원 이하 (under_10k) */
      {
        id: "g_u1",
        name: "스타벅스 e-Gift (아메리카노 & 부드러운 생크림 카스텔라)",
        category: "푸드 / 카페",
        priceRange: "under_10k",
        priceDisplay: "약 9,500원",
        icon: "☕",
        badge: "카톡 선물하기 1위",
        kakaotag: "만족도 99%",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["birthday", "thanks", "casual", "graduation_job"],
        mbtiTraits: { E: 5, I: 5, S: 5, N: 5, T: 5, F: 5, J: 5, P: 5 },
        baseReason: "호불호가 전혀 없는 국민 디저트 세트로, 지친 일상 속 기분 좋은 달콤한 휴식을 선물하기에 가장 부담 없고 실패 없는 선물이에요.",
        tags: ["#부담제로", "#호불호0%", "#달콤한휴식"]
      },
      {
        id: "g_u2",
        name: "카밀 핸드앤네일 크림 클래식 100ml 듀오 세트",
        category: "뷰티 / 핸드케어",
        priceRange: "under_10k",
        priceDisplay: "약 8,900원",
        icon: "🧴",
        badge: "올리브영 스테디셀러",
        kakaotag: "실속 1위",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["thanks", "season", "casual", "birthday"],
        mbtiTraits: { E: 3, I: 5, S: 6, N: 3, T: 6, F: 4, J: 6, P: 3 },
        baseReason: "카모마일 성분의 강력한 보습력으로 손끝까지 촉촉하게 지켜주는 독일 1등 핸드크림! 실용성과 보습력을 모두 챙긴 든든한 선물입니다.",
        tags: ["#독일1위", "#가성비최고", "#환절기필수"]
      },
      {
        id: "g_u3",
        name: "복슬복슬 아기 쿼카 캐릭터 인형 키링 & 에어팟 파우치",
        category: "패션 / 소품",
        priceRange: "under_10k",
        priceDisplay: "약 9,900원",
        icon: "🧸",
        badge: "SNS 인기 급상승",
        kakaotag: "취향저격템",
        targetGender: ["female", "any"],
        targetAge: ["10s", "20s_early"],
        occasions: ["birthday", "casual", "thanks"],
        mbtiTraits: { E: 5, I: 4, S: 2, N: 6, F: 6, T: 2, P: 5, J: 3 },
        baseReason: "보기만 해도 힐링되는 사랑스러운 쿼카 얼굴이 가방과 에어팟에 포인트를 줘요. 일상 속 귀여운 소확행을 선물하기에 제격이에요.",
        tags: ["#귀여움한도초과", "#가방포인트", "#소확행"]
      },
      {
        id: "g_u4",
        name: "메구리즘 스팀 온열 아이마스크 (무향 & 라벤더 5P)",
        category: "힐링 / 웰니스",
        priceRange: "under_10k",
        priceDisplay: "약 8,500원",
        icon: "🌙",
        badge: "직장인·수험생 1위",
        kakaotag: "꿀잠보장",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["thanks", "casual", "graduation_job", "season"],
        mbtiTraits: { E: 3, I: 6, S: 4, N: 5, T: 4, F: 6, J: 5, P: 4 },
        baseReason: "따뜻한 온열 스팀이 피로해진 눈과 굳은 마음을 사르르 녹여줘요. 밤마다 꿀잠을 선물하는 사려 깊은 응원의 메신저입니다.",
        tags: ["#숙면치트키", "#눈피로순삭", "#따뜻한응원"]
      },
      {
        id: "g_u5",
        name: "배달의민족 모바일 상품권 10,000원권",
        category: "라이프 / 상품권",
        priceRange: "under_10k",
        priceDisplay: "10,000원",
        icon: "🛵",
        badge: "실용성 100점",
        kakaotag: "자취생최애",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s"],
        occasions: ["thanks", "casual", "graduation_job", "birthday"],
        mbtiTraits: { E: 5, I: 5, S: 6, N: 3, T: 6, F: 3, P: 6, J: 4 },
        baseReason: "혼밥 할 때, 야식이 당길 때 고민 없이 쓸 수 있는 가장 센스 넘치는 실속형 선물! 실용성을 최고로 치는 분들에게 만족도 100%예요.",
        tags: ["#실용주의", "#야식지원군", "#자취방필수"]
      },
      {
        id: "g_u6",
        name: "바세린 립테라피 컬러 립밤 & 틴케이스 세트",
        category: "뷰티 / 립케어",
        priceRange: "under_10k",
        priceDisplay: "약 9,200원",
        icon: "💄",
        badge: "보습력 검증템",
        kakaotag: "생기충전",
        targetGender: ["female", "any"],
        targetAge: ["10s", "20s_early", "20s_late"],
        occasions: ["season", "casual", "thanks"],
        mbtiTraits: { E: 4, I: 4, S: 5, N: 3, T: 4, F: 5, J: 4, P: 4 },
        baseReason: "촉촉한 보습과 자연스러운 생기를 동시에 주는 데일리 립밤이에요. 작고 예쁜 틴케이스로 파우치에 쏙 넣어 다니기 좋아요.",
        tags: ["#촉촉립", "#자연스러운생기", "#파우치필수템"]
      },
      {
        id: "g_u7",
        name: "투썸플레이스 떠먹는 스트로베리 초콜릿 생크림(스초생)",
        category: "푸드 / 디저트",
        priceRange: "under_10k",
        priceDisplay: "약 6,700원",
        icon: "🍰",
        badge: "투썸 시그니처 1위",
        kakaotag: "달콤보장",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s"],
        occasions: ["birthday", "casual", "anniversary", "thanks"],
        mbtiTraits: { E: 5, I: 4, S: 4, N: 4, T: 3, F: 6, P: 5, J: 3 },
        baseReason: "크런치 초코볼이 톡톡 씹히는 진한 초콜릿 생크림과 상큼한 딸기의 조합! 기분 전환이 필요할 때 최고의 서프라이즈 디저트예요.",
        tags: ["#스초생", "#기분전환", "#초코딸기진리"]
      },
      {
        id: "g_u8",
        name: "원목 감성 북마크 & 모나미 153 프리미엄 볼펜 세트",
        category: "문구 / 오피스",
        priceRange: "under_10k",
        priceDisplay: "약 9,800원",
        icon: "✒️",
        badge: "지적인 감성템",
        kakaotag: "각인감성",
        targetGender: ["male", "any"],
        targetAge: ["20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["graduation_job", "thanks", "casual"],
        mbtiTraits: { E: 2, I: 6, S: 6, N: 4, T: 6, F: 4, J: 6, P: 2 },
        baseReason: "독서나 플래너 정리를 좋아하는 분에게 깊은 인상을 주는 원목 북마크와 묵직한 메탈 볼펜 세트예요. 단정한 멋이 돋보입니다.",
        tags: ["#클래식문구", "#독서메이트", "#신입사원"]
      },

      /* 2. 1 ~ 3만 원대 (10k_30k) */
      {
        id: "g_m1",
        name: "논픽션(Nonfiction) 핸드크림 50ml (상탈크림 / 젠틀나잇)",
        category: "뷰티 / 향수",
        priceRange: "10k_30k",
        priceDisplay: "약 23,000원",
        icon: "🌿",
        badge: "감성 뷰티 1위",
        kakaotag: "선물랭킹 최상위",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["birthday", "anniversary", "thanks", "casual"],
        mbtiTraits: { E: 4, I: 6, S: 3, N: 6, T: 3, F: 6, J: 4, P: 5 },
        baseReason: "고급스러운 향과 세련된 패키징으로 받는 사람의 기분을 단번에 설레게 하는 감성 선물! 손을 씻을 때마다 은은한 향이 하루를 채워줘요.",
        tags: ["#감성끝판왕", "#논픽션상탈", "#향기테라피"]
      },
      {
        id: "g_m2",
        name: "탬버린즈(TAMBURINS) 퍼퓸 쉘 엑스 핸드크림 (CHAMO 카모)",
        category: "뷰티 / 퍼퓸",
        priceRange: "10k_30k",
        priceDisplay: "약 32,000원",
        icon: "🐚",
        badge: "트렌드세터 워너비",
        kakaotag: "품절대란템",
        targetGender: ["female", "any"],
        targetAge: ["10s", "20s_early", "20s_late"],
        occasions: ["birthday", "anniversary", "casual"],
        mbtiTraits: { E: 6, I: 4, S: 2, N: 6, T: 3, F: 6, P: 6, J: 3 },
        baseReason: "조개 오브제를 닮은 독특하고 감각적인 패키지와 중독적인 카모 향으로 요즘 가장 핫한 퍼퓸 핸드크림! 센스 있다는 칭찬 100% 보장합니다.",
        tags: ["#제니핸드크림", "#오브제디자인", "#센스만점"]
      },
      {
        id: "g_m3",
        name: "양키캔들 미니 보티브 캔들 4종 & 캔들워머 세트",
        category: "리빙 / 인테리어",
        priceRange: "10k_30k",
        priceDisplay: "약 28,900원",
        icon: "🕯️",
        badge: "집들이·인테리어 베스트",
        kakaotag: "포근무드",
        targetGender: ["female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["housewarming", "birthday", "anniversary", "season"],
        mbtiTraits: { E: 3, I: 7, S: 4, N: 6, T: 3, F: 7, J: 4, P: 5 },
        baseReason: "불꽃 없이 안전하게 은은한 조명과 향기를 즐길 수 있어 방안 무드를 아늑하게 바꿔줘요. 집에서 쉬는 시간을 가장 포근하게 만들어줍니다.",
        tags: ["#집콕힐링", "#아늑한무드등", "#집들이강추"]
      },
      {
        id: "g_m4",
        name: "오설록 프리미엄 러블리 티 박스 (8종 24입 블렌디드 티)",
        category: "푸드 / 티",
        priceRange: "10k_30k",
        priceDisplay: "약 24,000원",
        icon: "🍵",
        badge: "감사선물 1위",
        kakaotag: "마음충전",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_late", "30s", "40s_plus"],
        occasions: ["thanks", "season", "housewarming", "birthday"],
        mbtiTraits: { E: 3, I: 6, S: 5, N: 4, T: 4, F: 6, J: 6, P: 3 },
        baseReason: "제주 영귤, 웨딩그린티 등 향긋하고 다채로운 차를 한 상자에 담았어요. 따뜻한 차 한 잔으로 정성 어린 마음과 여유를 전해보세요.",
        tags: ["#제주오설록", "#향긋한티타임", "#정성가득"]
      },
      {
        id: "g_m5",
        name: "크로우캐년 에나멜 마블 법랑 머그컵 & 실리콘 코스터",
        category: "리빙 / 키친",
        priceRange: "10k_30k",
        priceDisplay: "약 25,000원",
        icon: "🥛",
        badge: "홈카페 핫아이템",
        kakaotag: "힙한머그",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late"],
        occasions: ["housewarming", "birthday", "casual"],
        mbtiTraits: { E: 5, I: 4, S: 3, N: 6, T: 3, F: 5, P: 6, J: 3 },
        baseReason: "특유의 감각적인 마블 패턴으로 홈카페 사진을 부르는 잇 아이템! 깨지지 않고 튼튼한 법랑 소재라 데일리 머그로 애용하게 돼요.",
        tags: ["#크로우캐년", "#마블머그", "#인스타감성"]
      },
      {
        id: "g_m6",
        name: "벨킨 2-in-1 맥세이프 고속 무선충전 스탠드",
        category: "디지털 / 테크",
        priceRange: "10k_30k",
        priceDisplay: "약 29,900원",
        icon: "⚡",
        badge: "테크 덕후 극찬",
        kakaotag: "책상정리필수",
        targetGender: ["male", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s"],
        occasions: ["graduation_job", "birthday", "casual"],
        mbtiTraits: { E: 3, I: 5, S: 7, N: 2, T: 7, F: 2, J: 7, P: 3 },
        baseReason: "책상 위 지저분한 케이블을 깔끔하게 정리해 주는 스마트한 고속 무선 충전기! 실용성과 테크 감성을 모두 중시하는 분들에게 최고의 선택입니다.",
        tags: ["#깔끔한데스크", "#무선충전", "#테크실용템"]
      },
      {
        id: "g_m7",
        name: "록시땅 시어 버터 핸드크림 & 스틱 립밤 듀오 세트",
        category: "뷰티 / 보습",
        priceRange: "10k_30k",
        priceDisplay: "약 28,000원",
        icon: "💛",
        badge: "보습의 원조",
        kakaotag: "실패율0%",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["season", "birthday", "thanks", "casual"],
        mbtiTraits: { E: 4, I: 5, S: 6, N: 3, T: 4, F: 6, J: 6, P: 3 },
        baseReason: "수년째 선물 랭킹 부동의 최상위권을 지키는 검증된 클래식! 파우치 필수품인 립밤과 핸드크림의 완벽한 듀오 구성으로 칭찬받는 선물이에요.",
        tags: ["#록시땅클래식", "#호불호제로", "#극강의보습"]
      },
      {
        id: "g_m8",
        name: "러쉬(LUSH) 배쓰밤 & 버블바 릴렉싱 기프트 세트",
        category: "바디 / 스파",
        priceRange: "10k_30k",
        priceDisplay: "약 29,500원",
        icon: "🛁",
        badge: "힐링 뷰티 1위",
        kakaotag: "향기폭발",
        targetGender: ["female", "any"],
        targetAge: ["10s", "20s_early", "20s_late"],
        occasions: ["birthday", "anniversary", "thanks"],
        mbtiTraits: { E: 5, I: 5, S: 2, N: 6, T: 2, F: 7, P: 6, J: 3 },
        baseReason: "풍성한 거품과 영롱한 컬러, 욕실을 가득 채우는 에센셜 오일의 향기로 하루의 피로를 싹 씻어내 주는 나만을 위한 작은 스파 선물이에요.",
        tags: ["#러쉬입욕제", "#기분전환끝판왕", "#로맨틱무드"]
      },
      {
        id: "g_m9",
        name: "달콤 수제 마카롱 10구 & 프리미엄 구움과자 박스",
        category: "푸드 / 디저트",
        priceRange: "10k_30k",
        priceDisplay: "약 26,000원",
        icon: "🧁",
        badge: "파티 & 축하 베스트",
        kakaotag: "달콤선물",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late"],
        occasions: ["birthday", "anniversary", "thanks", "graduation_job"],
        mbtiTraits: { E: 6, I: 4, S: 4, N: 4, T: 3, F: 6, P: 5, J: 4 },
        baseReason: "알록달록 예쁜 비주얼과 쫀득한 식감으로 열어보는 순간 탄성이 나오는 디저트! 특별한 날의 달콤함을 더해주는 센스 있는 축하 선물입니다.",
        tags: ["#쫀득마카롱", "#비주얼천재", "#축하선물"]
      },
      {
        id: "g_m10",
        name: "모던 미니멀 천연 소가죽 카드지갑 & 키링 세트",
        category: "패션 / 소품",
        priceRange: "10k_30k",
        priceDisplay: "약 29,000원",
        icon: "💳",
        badge: "새출발 응원템",
        kakaotag: "슬림지갑",
        targetGender: ["male", "any"],
        targetAge: ["20s_early", "20s_late"],
        occasions: ["graduation_job", "birthday", "casual"],
        mbtiTraits: { E: 3, I: 6, S: 6, N: 3, T: 6, F: 3, J: 6, P: 3 },
        baseReason: "주머니에 쏙 들어가는 슬림한 두께와 부드러운 가죽의 감촉! 꼭 필요한 카드만 챙겨 다니는 현대인에게 유용하고 깔끔한 매일의 짝꿍이 됩니다.",
        tags: ["#슬림카드지갑", "#천연소가죽", "#새출발선물"]
      },

      /* 3. 3 ~ 5만 원대 (30k_50k) */
      {
        id: "g_p1",
        name: "이솝(Aesop) 레저렉션 아로마틱 핸드 밤 75ml",
        category: "뷰티 / 바디",
        priceRange: "30k_50k",
        priceDisplay: "약 39,000원",
        icon: "🌿",
        badge: "워너비 기프트 1위",
        kakaotag: "받고싶은선물1위",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["birthday", "anniversary", "housewarming", "graduation_job", "thanks"],
        mbtiTraits: { E: 4, I: 6, S: 4, N: 6, T: 4, F: 6, J: 5, P: 5 },
        baseReason: "은은한 시트러스와 우디 아로마의 독보적인 힐링 향! 책상이나 가방에 올려두는 것만으로도 품격을 더해주는 모두의 위시리스트 1위 아이템입니다.",
        tags: ["#이솝핸드크림", "#시트러스우디", "#럭셔리데일리"]
      },
      {
        id: "g_p2",
        name: "이솝(Aesop) 레저렉션 아로마틱 핸드 워시 500ml",
        category: "리빙 / 바디케어",
        priceRange: "30k_50k",
        priceDisplay: "약 49,000원",
        icon: "🧴",
        badge: "집들이 끝판왕",
        kakaotag: "호텔욕실무드",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_late", "30s", "40s_plus"],
        occasions: ["housewarming", "birthday", "anniversary", "thanks"],
        mbtiTraits: { E: 4, I: 6, S: 5, N: 5, T: 4, F: 6, J: 6, P: 4 },
        baseReason: "세련된 브라운 보틀이 욕실을 5성급 호텔 분위기로 바꿔줘요. 손을 씻을 때마다 퍼지는 아로마 향기로 매일 감탄하게 되는 집들이 최고의 선물!",
        tags: ["#호텔핸드워시", "#이솝시그니처", "#집들이치트키"]
      },
      {
        id: "g_p3",
        name: "딥티크(Diptyque) 센티드 퍼퓸 솝 & 세라믹 디쉬 세트",
        category: "뷰티 / 향수",
        priceRange: "30k_50k",
        priceDisplay: "약 42,000원",
        icon: "🧼",
        badge: "프랑스 니치 퍼퓸",
        kakaotag: "우아한향기",
        targetGender: ["female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["birthday", "anniversary", "housewarming"],
        mbtiTraits: { E: 4, I: 6, S: 2, N: 7, T: 2, F: 7, J: 4, P: 5 },
        baseReason: "비누 하나만 놓아두어도 욕실 전체가 고급스러운 향기로 물들어요. 프랑스 프리미엄 니치 향수의 우아함을 부담 없이 선물할 수 있습니다.",
        tags: ["#딥티크솝", "#니치향수감성", "#욕실오브제"]
      },
      {
        id: "g_p4",
        name: "조말론 런던 미니 트래블 캔들 60g (잉글리쉬 페어 / 우드세이지)",
        category: "리빙 / 향기",
        priceRange: "30k_50k",
        priceDisplay: "약 48,000원",
        icon: "🕯️",
        badge: "영국 럭셔리 감성",
        kakaotag: "로맨틱캔들",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["anniversary", "birthday", "housewarming"],
        mbtiTraits: { E: 4, I: 6, S: 3, N: 6, T: 3, F: 6, J: 4, P: 5 },
        baseReason: "조말론의 시그니처 크림 박스에 블랙 리본을 둘러 건네는 순간 기분 좋은 설렘을 선사해요. 아늑한 공간을 품격 있게 채워주는 캔들입니다.",
        tags: ["#조말론캔들", "#블랙리본포장", "#특별한날"]
      },
      {
        id: "g_p5",
        name: "오덴세(Odense) 아틀리에 머그 2P & 원목 플레이트 세트",
        category: "리빙 / 테이블웨어",
        priceRange: "30k_50k",
        priceDisplay: "약 45,000원",
        icon: "🍽️",
        badge: "신혼·집들이 1위",
        kakaotag: "감성브런치",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_late", "30s", "40s_plus"],
        occasions: ["housewarming", "anniversary", "thanks"],
        mbtiTraits: { E: 4, I: 6, S: 5, N: 4, T: 3, F: 6, J: 6, P: 4 },
        baseReason: "따뜻한 북유럽 감성의 색감과 자연스러운 도자기 텍스처로 브런치 테이블을 빛내줘요. 오래도록 튼튼하게 쓸 수 있는 고급스러운 식기 세트입니다.",
        tags: ["#오덴세", "#테이블웨어", "#감성플레이팅"]
      },
      {
        id: "g_p6",
        name: "라미(LAMY) 사파리 만년필 + 잉크 컨버터 + 각인 세트",
        category: "문구 / 오피스",
        priceRange: "30k_50k",
        priceDisplay: "약 38,000원",
        icon: "✒️",
        badge: "취업·합격 축하 1위",
        kakaotag: "각인서비스",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s"],
        occasions: ["graduation_job", "birthday", "thanks"],
        mbtiTraits: { E: 2, I: 7, S: 5, N: 5, T: 6, F: 4, J: 7, P: 3 },
        baseReason: "독일의 정교한 기술력과 인체공학적 디자인으로 글을 쓸 때마다 손끝에 전해지는 사각거림이 특별해요. 받는 사람의 이름을 새겨 평생 기억될 선물을 만들어보세요.",
        tags: ["#라미만년필", "#나만의각인", "#취업선물끝판왕"]
      },
      {
        id: "g_p7",
        name: "오쏘몰 이뮨 멀티비타민 & 미네랄 (7일분 스페셜 에디션)",
        category: "건강 / 웰니스",
        priceRange: "30k_50k",
        priceDisplay: "약 38,000원",
        icon: "💊",
        badge: "비타민계의 에르메스",
        kakaotag: "활력충전",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["thanks", "graduation_job", "season", "birthday"],
        mbtiTraits: { E: 4, I: 4, S: 7, N: 3, T: 6, F: 4, J: 6, P: 3 },
        baseReason: "바쁜 현대인에게 강력한 활력을 불어넣어 주는 프리미엄 비타민! 고급스러운 원통형 패키지와 확실한 피로회복 효과로 정성을 전하기에 완벽합니다.",
        tags: ["#오쏘몰이뮨", "#독일프리미엄", "#피로회복"]
      },
      {
        id: "g_p8",
        name: "샤넬(CHANEL) 루쥬 코코 밤 / 립앤치크 틴트",
        category: "뷰티 / 메이크업",
        priceRange: "30k_50k",
        priceDisplay: "약 48,000원",
        icon: "💄",
        badge: "스몰 럭셔리 1위",
        kakaotag: "샤넬화이트박스",
        targetGender: ["female"],
        targetAge: ["10s", "20s_early", "20s_late", "30s"],
        occasions: ["birthday", "anniversary", "casual"],
        mbtiTraits: { E: 6, I: 4, S: 3, N: 6, T: 2, F: 7, P: 5, J: 4 },
        baseReason: "샤넬 로고가 새겨진 화이트 패키지와 쇼핑백을 열 때의 두근거림! 촉촉한 입술 케어와 은은한 발색으로 매일 꺼내 쓸 때마다 기분 좋은 미소를 안겨줘요.",
        tags: ["#샤넬립밤", "#스몰럭셔리", "#생일선물추천"]
      },
      {
        id: "g_p9",
        name: "랩시리즈(LAB SERIES) 워터 로션 + 올인원 프로 세트",
        category: "뷰티 / 남성케어",
        priceRange: "30k_50k",
        priceDisplay: "약 49,000원",
        icon: "🧴",
        badge: "남성 스킨케어 1등",
        kakaotag: "피부치트키",
        targetGender: ["male"],
        targetAge: ["20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["birthday", "graduation_job", "anniversary", "thanks"],
        mbtiTraits: { E: 4, I: 5, S: 6, N: 3, T: 6, F: 3, J: 6, P: 4 },
        baseReason: "끈적임 없이 산뜻하게 유수분 밸런스를 맞춰주는 남성 화장품계의 절대 강자! 복잡한 것 싫어하는 남성분들에게 최고의 실용 선물이 됩니다.",
        tags: ["#랩시리즈", "#남성올인원", "#실패없는남자선물"]
      },
      {
        id: "g_p10",
        name: "프리미엄 칠레산 리저브 와인 & 크리스탈 와인잔 2P 기프트 박스",
        category: "푸드 / 주류",
        priceRange: "30k_50k",
        priceDisplay: "약 48,000원",
        icon: "🍷",
        badge: "로맨틱 & 파티 베스트",
        kakaotag: "분위기메이커",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_late", "30s", "40s_plus"],
        occasions: ["anniversary", "housewarming", "birthday"],
        mbtiTraits: { E: 6, I: 4, S: 4, N: 5, T: 3, F: 6, P: 5, J: 4 },
        baseReason: "특별한 날의 저녁을 근사하게 물들여줄 와인과 영롱한 크리스탈 잔 세트! 둘만의 기념일이나 집들이 파티에 분위기를 한층 돋워줍니다.",
        tags: ["#홈파티와인", "#크리스탈글라스", "#로맨틱무드"]
      },

      /* 4. 5 ~ 10만 원대 (50k_100k) */
      {
        id: "g_h1",
        name: "조말론 런던 코롱 30ml (블랙베리 앤 베이 / 잉글리쉬 페어)",
        category: "뷰티 / 향수",
        priceRange: "50k_100k",
        priceDisplay: "약 98,000원",
        icon: "✨",
        badge: "국민 니치 향수",
        kakaotag: "고급향기",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["birthday", "anniversary", "graduation_job"],
        mbtiTraits: { E: 5, I: 5, S: 3, N: 6, T: 3, F: 6, J: 5, P: 5 },
        baseReason: "상큼하고 세련된 시그니처 향으로 사계절 내내 사랑받는 명품 향수! 특별한 기념일과 생일에 품격을 담아 선물하기에 완벽한 명작입니다.",
        tags: ["#조말론향수", "#블랙베리앤베이", "#명품향수"]
      },
      {
        id: "g_h2",
        name: "르라보(LE LABO) 히노키 핸드 앤 바디 로션 250ml",
        category: "바디 / 퍼퓸",
        priceRange: "50k_100k",
        priceDisplay: "약 65,000원",
        icon: "🌲",
        badge: "고급 스파 무드",
        kakaotag: "우디향성지",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["birthday", "housewarming", "anniversary"],
        mbtiTraits: { E: 3, I: 7, S: 2, N: 7, T: 4, F: 6, J: 4, P: 6 },
        baseReason: "일본 고야산의 편백나무 숲에 둘러싸인 듯한 깊고 그윽한 히노키 향기! 감성적인 휴식과 고급스러운 인테리어를 동시에 만족시킵니다.",
        tags: ["#르라보히노키", "#우디인생향", "#감성바디로션"]
      },
      {
        id: "g_h3",
        name: "마샬(Marshall) 윌렌(Willen) 미니 포터블 블루투스 스피커",
        category: "디지털 / 음향",
        priceRange: "50k_100k",
        priceDisplay: "약 99,000원",
        icon: "📻",
        badge: "음향 & 디자인 올킬",
        kakaotag: "캠핑·인테리어",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s"],
        occasions: ["birthday", "housewarming", "graduation_job"],
        mbtiTraits: { E: 6, I: 4, S: 3, N: 7, T: 4, F: 5, P: 6, J: 3 },
        baseReason: "마샬 특유의 빈티지 레트로 감성과 강력한 사운드를 손바닥만 한 크기에 담았어요! 방 인테리어 오브제로도, 야외 캠핑 피크닉에서도 빛을 발합니다.",
        tags: ["#마샬스피커", "#레트로감성", "#인테리어오브제"]
      },
      {
        id: "g_h4",
        name: "네스프레소 에센자 미니 C30 캡슐 커피머신",
        category: "가전 / 홈카페",
        priceRange: "50k_100k",
        priceDisplay: "약 99,000원",
        icon: "☕",
        badge: "홈카페 필수템 1위",
        kakaotag: "자취방삶의질상승",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["housewarming", "graduation_job", "birthday", "anniversary"],
        mbtiTraits: { E: 4, I: 6, S: 6, N: 4, T: 6, F: 4, J: 6, P: 4 },
        baseReason: "버튼 한 번으로 집에서도 카페 수준의 크레마 풍부한 에스프레소를 즐겨요! 콤팩트한 사이즈로 좁은 주방이나 원룸에도 쏙 들어가는 삶의 질 수직 상승템입니다.",
        tags: ["#네스프레소머신", "#홈카페입문", "#삶의질상승"]
      },
      {
        id: "g_h5",
        name: "로지텍 MX Master 3S 최고급 무선 인체공학 마우스",
        category: "디지털 / 오피스",
        priceRange: "50k_100k",
        priceDisplay: "약 98,000원",
        icon: "🖱️",
        badge: "개발자·기획자 찬양",
        kakaotag: "업무효율극대화",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["graduation_job", "birthday", "thanks"],
        mbtiTraits: { E: 2, I: 6, S: 7, N: 3, T: 7, F: 2, J: 7, P: 2 },
        baseReason: "손목의 편안함과 초고속 마그네틱 휠 스크롤로 업무 생산성을 300% 올려주는 명품 마우스! 컴퓨터를 오래 쓰는 직장인에게 찬사를 받는 실용성 최강 선물입니다.",
        tags: ["#로지텍끝판왕", "#손목보호", "#신입사원장비"]
      },
      {
        id: "g_h6",
        name: "메종 마르지엘라 레플리카 디퓨저 185ml (레이지 선데이 모닝)",
        category: "리빙 / 프래그런스",
        priceRange: "50k_100k",
        priceDisplay: "약 89,000원",
        icon: "🧴",
        badge: "호텔 침구 감성",
        kakaotag: "포근한코튼향",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["housewarming", "birthday", "anniversary"],
        mbtiTraits: { E: 3, I: 7, S: 3, N: 6, T: 3, F: 6, J: 5, P: 5 },
        baseReason: "일요일 아침 햇살이 비치는 깨끗한 화이트 코튼 침구의 향기! 마르지엘라 특유의 감성 라벨이 방안의 무드를 한층 고급스럽게 업그레이드해 줍니다.",
        tags: ["#마르지엘라디퓨저", "#레이지선데이모닝", "#집들이감성"]
      },
      {
        id: "g_h7",
        name: "닥스(DAKS) DD로고 천연가죽 슬림 남성 반지갑",
        category: "패션 / 잡화",
        priceRange: "50k_100k",
        priceDisplay: "약 85,000원",
        icon: "👛",
        badge: "클래식 명품",
        kakaotag: "취업축하1등",
        targetGender: ["male"],
        targetAge: ["20s_late", "30s", "40s_plus"],
        occasions: ["graduation_job", "birthday", "anniversary", "thanks"],
        mbtiTraits: { E: 3, I: 5, S: 7, N: 2, T: 6, F: 3, J: 7, P: 3 },
        baseReason: "단단하고 스크래치에 강한 최고급 천연 가죽과 클래식한 DD 메탈 로고의 조화! 출퇴근길 비즈니스 룩에 품격을 더해주는 든든한 선물입니다.",
        tags: ["#닥스지갑", "#천연가죽반지갑", "#비즈니스필수"]
      },
      {
        id: "g_h8",
        name: "오쏘몰 이뮨 멀티비타민 & 미네랄 30일분 프리미엄 박스",
        category: "건강 / 웰니스",
        priceRange: "50k_100k",
        priceDisplay: "약 89,000원",
        icon: "💊",
        badge: "한 달 활력 충전",
        kakaotag: "정성끝판왕",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_late", "30s", "40s_plus"],
        occasions: ["thanks", "season", "graduation_job", "birthday"],
        mbtiTraits: { E: 4, I: 4, S: 7, N: 2, T: 6, F: 4, J: 7, P: 3 },
        baseReason: "한 달 동안 매일매일 건강과 활력을 챙겨주는 든든한 지원군! 부모님, 은사님, 고마운 분께 진심 어린 마음을 전하기에 이보다 좋은 보약은 없습니다.",
        tags: ["#오쏘몰30일분", "#원기회복", "#건강선물1위"]
      },

      /* 5. 10만 원 이상 (over_100k) */
      {
        id: "g_v1",
        name: "애플 에어팟 프로 2세대 (액티브 노이즈 캔슬링)",
        category: "디지털 / 음향",
        priceRange: "over_100k",
        priceDisplay: "약 329,000원",
        icon: "🎧",
        badge: "세상과 단둘만의 음악",
        kakaotag: "만족도 100%",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s"],
        occasions: ["birthday", "graduation_job", "anniversary"],
        mbtiTraits: { E: 4, I: 7, S: 6, N: 5, T: 6, F: 4, J: 5, P: 5 },
        baseReason: "귀에 꽂는 순간 주변 소음이 마법처럼 사라지는 궁극의 몰입감! 출퇴근길과 집중이 필요한 순간마다 선물한 사람의 센스에 무한 감동하게 되는 프리미엄 테크 선물입니다.",
        tags: ["#에어팟프로2", "#노이즈캔슬링", "#워너비테크"]
      },
      {
        id: "g_v2",
        name: "다이슨 슈퍼소닉 헤어드라이어 오리지널 에디션",
        category: "가전 / 뷰티",
        priceRange: "over_100k",
        priceDisplay: "약 490,000원",
        icon: "💨",
        badge: "헤어케어의 혁명",
        kakaotag: "평생소장템",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s", "40s_plus"],
        occasions: ["birthday", "anniversary", "housewarming"],
        mbtiTraits: { E: 5, I: 5, S: 6, N: 5, T: 5, F: 5, J: 6, P: 4 },
        baseReason: "열 손상 없이 초강력 바람으로 머리를 순식간에 말려 아침 시간을 획기적으로 줄여줘요! 매일 쓰는 필수 가전이라 쓸 때마다 행복해지는 최고의 선물입니다.",
        tags: ["#다이슨드라이기", "#모발케어", "#프리미엄가전"]
      },
      {
        id: "g_v3",
        name: "메종 마르지엘라 스티치 천연가죽 카드 홀더 지갑",
        category: "명품 / 패션",
        priceRange: "over_100k",
        priceDisplay: "약 240,000원",
        icon: "👛",
        badge: "프랑스 럭셔리 감성",
        kakaotag: "감성카드지갑",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["birthday", "anniversary", "graduation_job"],
        mbtiTraits: { E: 4, I: 6, S: 3, N: 7, T: 4, F: 5, P: 6, J: 4 },
        baseReason: "시그니처 4-스티치 화이트 디테일로 조용한 럭셔리의 정점을 보여주는 카드지갑! 트렌디하고 감각적인 패션을 사랑하는 분에게 최고의 서프라이즈가 됩니다.",
        tags: ["#마르지엘라지갑", "#화이트스티치", "#2030워너비"]
      },
      {
        id: "g_v4",
        name: "딥티크 오 드 퍼퓸 75ml (플레르 드 뽀 / 도 손)",
        category: "명품 / 향수",
        priceRange: "over_100k",
        priceDisplay: "약 260,000원",
        icon: "✨",
        badge: "살냄새 니치 향수 1위",
        kakaotag: "독보적잔향",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_early", "20s_late", "30s"],
        occasions: ["birthday", "anniversary"],
        mbtiTraits: { E: 4, I: 7, S: 2, N: 8, T: 2, F: 8, P: 6, J: 3 },
        baseReason: "포근하고 관능적인 머스크와 아이리스가 어우러져 평생 기억될 나만의 시그니처 살냄새를 완성해요. 둘만의 특별한 기념일에 마음을 고백하기에 더할 나위 없습니다.",
        tags: ["#플레르드뽀", "#딥티크본품", "#살냄새향수"]
      },
      {
        id: "g_v5",
        name: "서울신라호텔 더 파크뷰 디너 2인 프리미엄 식사권",
        category: "호텔 / 미식",
        priceRange: "over_100k",
        priceDisplay: "약 360,000원",
        icon: "🍽️",
        badge: "대한민국 3대 뷔페",
        kakaotag: "최고의미식경험",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_late", "30s", "40s_plus"],
        occasions: ["anniversary", "birthday", "thanks"],
        mbtiTraits: { E: 6, I: 4, S: 5, N: 4, T: 4, F: 6, J: 6, P: 4 },
        baseReason: "물건보다 오래 남는 잊지 못할 미식의 추억! 최고급 식재료와 우아한 분위기 속에서 소중한 사람과 함께 나누는 가장 로맨틱하고 럭셔리한 하루를 선물하세요.",
        tags: ["#신라호텔뷔페", "#더파크뷰", "#특별한데이트"]
      },
      {
        id: "g_v6",
        name: "발뮤다 더 토스터기 K05B (스팀 홈베이커리)",
        category: "주방가전 / 리빙",
        priceRange: "over_100k",
        priceDisplay: "약 289,000원",
        icon: "🍞",
        badge: "죽은 빵도 살리는 마법",
        kakaotag: "신혼가전1위",
        targetGender: ["male", "female", "any"],
        targetAge: ["20s_late", "30s", "40s_plus"],
        occasions: ["housewarming", "anniversary", "birthday"],
        mbtiTraits: { E: 4, I: 6, S: 6, N: 5, T: 5, F: 5, J: 6, P: 4 },
        baseReason: "5cc의 물로 겉은 바삭하고 속은 촉촉한 갓 구운 빵의 맛을 재현하는 감성 가전의 명작! 집들이와 신혼부부에게 선물하면 칭찬이 끊이지 않는 베스트셀러입니다.",
        tags: ["#발뮤다토스터", "#겉바속촉", "#홈카페로망"]
      },
      {
        id: "g_v7",
        name: "애플워치 SE 2세대 (GPS 모델 40mm / 44mm)",
        category: "디지털 / 스마트워치",
        priceRange: "over_100k",
        priceDisplay: "약 329,000원",
        icon: "⌚",
        badge: "스마트 라이프의 시작",
        kakaotag: "손목위의비서",
        targetGender: ["male", "female", "any"],
        targetAge: ["10s", "20s_early", "20s_late", "30s"],
        occasions: ["graduation_job", "birthday", "anniversary"],
        mbtiTraits: { E: 5, I: 4, S: 7, N: 3, T: 6, F: 3, J: 7, P: 4 },
        baseReason: "운동 체크, 수면 분석, 중요한 알림 확인까지 손목 위에서 하루를 똑똑하게 관리해 줘요! 실용성과 패션을 동시에 잡는 모두의 위시리스트 스마트 디바이스입니다.",
        tags: ["#애플워치SE", "#스마트워치", "#데일리필수템"]
      }
    ];

    /* ==========================================================================
       2. Application State (사용자 입력 상태 보존 및 수정 지원)
       ========================================================================== */
    const state = {
      gender: null,       // 'male' | 'female' | 'any'
      age: null,          // '10s' | '20s_early' | '20s_late' | '30s' | '40s_plus'
      mbti: null,         // e.g. 'INFP', 'ISTJ', etc.
      occasion: null,     // 'birthday' | 'anniversary' | 'graduation_job' | 'housewarming' | 'thanks' | 'season' | 'casual'
      budget: null,       // 'under_10k' | '10k_30k' | '30k_50k' | '50k_100k' | 'over_100k'
      isModifying: false, // Flag when user returned from results
      heartedGifts: new Set()
    };

    // Label dictionaries for display
    const LABELS = {
      gender: { male: "남성 👨", female: "여성 👩", any: "무관/기타 ✨" },
      age: { "10s": "10대", "20s_early": "20대 초반", "20s_late": "20대 후반", "30s": "30대", "40s_plus": "40대 이상" },
      occasion: {
        birthday: "생일 🎂",
        anniversary: "기념일 💐",
        graduation_job: "졸업/취업 🎓",
        housewarming: "집들이 🏠",
        thanks: "감사/응원 💌",
        season: "계절/명절 🍂",
        casual: "소소한 선물 ☕"
      },
      budget: {
        under_10k: "1만 원 이하 🪙",
        "10k_30k": "1~3만 원대 🏷️",
        "30k_50k": "3~5만 원대 🎁",
        "50k_100k": "5~10만 원대 💎",
        over_100k: "10만 원 이상 👑"
      }
    };

    /* ==========================================================================
       3. View Switching Controller
       ========================================================================== */
    function showView(viewId) {
      document.querySelectorAll('.view-section').forEach(el => {
        el.classList.remove('active');
      });
      const target = document.getElementById(viewId);
      if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    function goToHome() {
      showView('view-home');
    }

    function startRecommendation() {
      showView('view-input');
      // If user is returning from fresh start, clear modifying state
      if (!state.isModifying) {
        document.getElementById('submit-btn-text').textContent = "🎁 맞춤 선물 5가지 추천받기";
      }
    }

    /* ==========================================================================
       4. Input Handling & Checkbox Interactions
       ========================================================================== */
    function selectOption(category, value, cardElement) {
      // Clear alert
      hideValidationAlert();
      document.getElementById(`section-${category}`).classList.remove('error-highlight');

      // Update state
      state[category] = value;

      // Update UI: uncheck siblings
      const parent = cardElement.parentElement;
      parent.querySelectorAll('.check-card').forEach(c => c.classList.remove('checked'));
      cardElement.classList.add('checked');

      // Play soft spring animation
      cardElement.style.transform = 'scale(0.97)';
      setTimeout(() => {
        cardElement.style.transform = '';
      }, 150);
    }

    function pickMbti(mbtiType, cardElement) {
      hideValidationAlert();
      document.getElementById('section-mbti').classList.remove('error-highlight');
      state.mbti = mbtiType;

      // Update cards UI
      document.querySelectorAll('.mbti-card').forEach(c => c.classList.remove('checked'));
      if (cardElement) {
        cardElement.classList.add('checked');
      } else {
        const found = document.querySelector(`.mbti-card[data-mbti="${mbtiType}"]`);
        if (found) found.classList.add('checked');
      }

      // Update display chip
      const chip = document.getElementById('mbti-chip-display');
      chip.innerHTML = `<span>✨ ${mbtiType} (${cardElement ? cardElement.querySelector('.mbti-nickname').textContent : ''})</span>`;
      chip.style.borderColor = "var(--green-leaf)";
      chip.style.color = "var(--text-green)";

      // Sync 4-trait buttons
      syncTraitButtons(mbtiType);
    }

    function syncTraitButtons(mbtiStr) {
      if (!mbtiStr || mbtiStr.length !== 4) return;
      const [e_i, s_n, t_f, j_p] = mbtiStr.split('');
      ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'].forEach(letter => {
        const btn = document.getElementById(`btn-${letter}`);
        if (btn) btn.classList.remove('active');
      });
      document.getElementById(`btn-${e_i}`)?.classList.add('active');
      document.getElementById(`btn-${s_n}`)?.classList.add('active');
      document.getElementById(`btn-${t_f}`)?.classList.add('active');
      document.getElementById(`btn-${j_p}`)?.classList.add('active');
    }

    function toggleTraitAxis(axis, targetLetter) {
      hideValidationAlert();
      document.getElementById('section-mbti').classList.remove('error-highlight');

      let currentMbti = state.mbti || "ENFP";
      let chars = currentMbti.split('');

      if (axis === 'EI') chars[0] = targetLetter;
      if (axis === 'SN') chars[1] = targetLetter;
      if (axis === 'TF') chars[2] = targetLetter;
      if (axis === 'JP') chars[3] = targetLetter;

      const newMbti = chars.join('');
      const card = document.querySelector(`.mbti-card[data-mbti="${newMbti}"]`);
      pickMbti(newMbti, card);
    }

    /* ==========================================================================
       5. Validation Logic
       ========================================================================== */
    function hideValidationAlert() {
      const alert = document.getElementById('validation-alert');
      alert.classList.remove('show');
    }

    function showValidationAlert(missingList) {
      const alert = document.getElementById('validation-alert');
      const text = document.getElementById('missing-fields-text');
      text.textContent = missingList.join(', ') + "을(를) 선택해 주세요!";
      alert.classList.add('show');

      // Scroll to first error
      const firstError = missingList[0];
      let targetId = '';
      if (firstError.includes('성별')) targetId = 'section-gender';
      else if (firstError.includes('연령대')) targetId = 'section-age';
      else if (firstError.includes('MBTI')) targetId = 'section-mbti';
      else if (firstError.includes('선물 이유')) targetId = 'section-occasion';
      else if (firstError.includes('예산')) targetId = 'section-budget';

      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          el.classList.add('error-highlight');
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }

    function validateInputs() {
      const missing = [];
      if (!state.gender) missing.push('1. 성별');
      if (!state.age) missing.push('2. 연령대');
      if (!state.mbti) missing.push('3. MBTI 성향');
      if (!state.occasion) missing.push('4. 선물 이유');
      if (!state.budget) missing.push('5. 예산 범위');
      return missing;
    }

    /* ==========================================================================
       6. Recommendation Engine & Personalized Reason Generator
       ========================================================================== */
    function calculateRecommendations() {
      const { gender, age, mbti, occasion, budget } = state;
      const mbtiChars = mbti.split(''); // [E/I, S/N, T/F, J/P]

      const scoredList = GIFT_DATABASE.map(gift => {
        let score = 0;

        // 1. Budget Match (Highest priority)
        if (gift.priceRange === budget) {
          score += 60; // Strong primary weight
        } else {
          // Adjacent budget tolerance
          const budgetOrder = ['under_10k', '10k_30k', '30k_50k', '50k_100k', 'over_100k'];
          const userIdx = budgetOrder.indexOf(budget);
          const giftIdx = budgetOrder.indexOf(gift.priceRange);
          if (Math.abs(userIdx - giftIdx) === 1) {
            score += 15;
          }
        }

        // 2. Occasion Match
        if (gift.occasions.includes(occasion)) {
          score += 30;
        }

        // 3. Gender Match
        if (gift.targetGender.includes(gender) || gift.targetGender.includes("any")) {
          score += 20;
        } else {
          score -= 30; // Gender mismatch penalty (e.g. female makeup for male)
        }

        // 4. Age Match
        if (gift.targetAge.includes(age)) {
          score += 20;
        }

        // 5. MBTI Trait Synergy
        mbtiChars.forEach(letter => {
          if (gift.mbtiTraits[letter]) {
            score += gift.mbtiTraits[letter] * 2;
          }
        });

        // 6. Occasion + Budget Synergy Boost
        if (occasion === 'housewarming' && (gift.category.includes('리빙') || gift.category.includes('가전'))) {
          score += 15;
        }
        if (occasion === 'graduation_job' && (gift.category.includes('오피스') || gift.category.includes('패션') || gift.category.includes('디지털'))) {
          score += 15;
        }
        if (occasion === 'birthday' && (gift.category.includes('향수') || gift.category.includes('뷰티') || gift.category.includes('스피커'))) {
          score += 12;
        }

        return { gift, score };
      });

      // Sort by score descending
      scoredList.sort((a, b) => b.score - a.score);

      // Return Top 5
      return scoredList.slice(0, 5).map(item => item.gift);
    }

    // Dynamic Personalized Reason Generator tailored to the specific combinations
    function generatePersonalizedReason(gift, rank) {
      const { gender, age, mbti, occasion, budget } = state;
      const genderText = gender === 'male' ? '남성' : (gender === 'female' ? '여성' : '지인');
      const ageText = LABELS.age[age];
      const occasionText = LABELS.occasion[occasion].split(' ')[0];

      // MBTI specific comment hook
      let mbtiHook = "";
      if (mbti.includes("NF")) {
        mbtiHook = `따뜻한 감성과 정성을 소중히 여기는 ${mbti} 유형의 마음을 사르르 녹여줄 맞춤형 무드템이에요.`;
      } else if (mbti.includes("NT")) {
        mbtiHook = `스마트하고 완성도 높은 가치를 추구하는 ${mbti} 유형에게 깊은 만족감을 선사하는 센스 넘치는 아이템입니다.`;
      } else if (mbti.includes("ST")) {
        mbtiHook = `실용성과 내구성을 가장 먼저 생각하는 ${mbti} 성향에 꼭 맞아 일상에서 매일매일 유용하게 쓰일 선물이에요.`;
      } else {
        mbtiHook = `다정하고 센스 있는 디테일을 좋아하는 ${mbti} 유형의 취향을 정확히 저격한 아이템입니다.`;
      }

      // Rank nuance
      let rankNuance = "";
      if (rank === 1) {
        rankNuance = `현재 입력하신 조건(예산 ${LABELS.budget[budget].split(' ')[0]} · ${occasionText})에서 가장 만족도가 높은 실패 없는 1등 강력 추천작이에요.`;
      } else if (rank === 2) {
        rankNuance = `${ageText} ${genderText}분들이 선물받았을 때 호불호 없이 가장 환호하는 베스트셀러입니다.`;
      } else if (rank === 3) {
        rankNuance = `선물하는 사람의 남다른 안목과 센스를 자연스럽게 보여줄 수 있는 감각적인 선택지예요.`;
      } else {
        rankNuance = `부담스럽지 않으면서도 실속과 감동을 고루 챙겨주는 든든한 큐레이션 선물입니다.`;
      }

      return `${mbtiHook} ${rankNuance} ${gift.baseReason}`;
    }

    /* ==========================================================================
       7. Submit & Render Results
       ========================================================================== */
    function submitRecommendation() {
      // 1. Validate
      const missingFields = validateInputs();
      if (missingFields.length > 0) {
        showValidationAlert(missingFields);
        return;
      }

      // 2. Compute Top 5 gifts
      const top5 = calculateRecommendations();

      // 3. Render Results
      renderResults(top5);

      // 4. Switch View
      showView('view-result');

      // 5. Fire celebratory confetti effect
      fireConfetti();
    }

    function renderResults(top5Gifts) {
      const { gender, age, mbti, occasion, budget } = state;

      // Update Curator Comment
      const commentEl = document.getElementById('result-curator-comment');
      commentEl.innerHTML = `
        <strong>🐿️ 토리의 큐레이션 브리핑:</strong><br>
        "${LABELS.age[age]} · ${LABELS.gender[gender].split(' ')[0]} · <strong>${mbti}</strong> 성향에 맞춰 <strong>${LABELS.occasion[occasion]}</strong> 상황과 <strong>${LABELS.budget[budget].split(' ')[0]}</strong> 예산에 가장 완벽히 부합하는 5가지 선물을 엄선했어요! 센스 있는 선물로 소중한 순간을 빛내보세요 🍃"
      `;

      // Update Filter Chips
      const chipsEl = document.getElementById('criteria-chips-container');
      chipsEl.innerHTML = `
        <span class="criteria-chip">👤 ${LABELS.gender[gender]}</span>
        <span class="criteria-chip">🎂 ${LABELS.age[age]}</span>
        <span class="criteria-chip">🧠 ${mbti}</span>
        <span class="criteria-chip">🎁 ${LABELS.occasion[occasion]}</span>
        <span class="criteria-chip">💰 ${LABELS.budget[budget]}</span>
      `;

      // Render 5 Gift Cards
      const container = document.getElementById('gift-cards-container');
      container.innerHTML = '';

      top5Gifts.forEach((gift, index) => {
        const rank = index + 1;
        const personalizedReason = generatePersonalizedReason(gift, rank);
        const isHearted = state.heartedGifts.has(gift.id);

        let rankBadgeText = "";
        if (rank === 1) rankBadgeText = "👑 TOP 1 토리 강력추천";
        else if (rank === 2) rankBadgeText = "🌟 TOP 2 실패없는 안전빵";
        else if (rank === 3) rankBadgeText = "🌿 TOP 3 감성 취향저격";
        else if (rank === 4) rankBadgeText = "💎 TOP 4 실용성 끝판왕";
        else rankBadgeText = "✨ TOP 5 센스만점 서프라이즈";

        // Query link for Naver Shopping
        const searchUrl = `https://search.shopping.naver.com/search/all?query=${encodeURIComponent(gift.name)}`;

        const card = document.createElement('div');
        card.className = `gift-card rank-${rank}`;
        card.innerHTML = `
          <div class="gift-card-header">
            <div class="rank-badge-wrap">
              <span class="rank-badge">${rankBadgeText}</span>
              <span class="gift-kakaobadge">${gift.kakaotag}</span>
            </div>
            <button type="button" class="gift-wish-heart ${isHearted ? 'hearted' : ''}" onclick="toggleHeart('${gift.id}', this)" title="위시리스트 담기">
              ${isHearted ? '❤️' : '🤍'}
            </button>
          </div>

          <div class="gift-body-layout">
            <div class="gift-avatar-circle">
              ${gift.icon}
            </div>
            <div class="gift-info">
              <div class="gift-category-tag">[${gift.category}] · ${gift.badge}</div>
              <h3 class="gift-title">${gift.name}</h3>
              <div class="gift-price-box">
                <span class="gift-price">${gift.priceDisplay}</span>
                <span class="gift-price-sub">(${LABELS.budget[gift.priceRange].split(' ')[0]})</span>
              </div>
            </div>
          </div>

          <!-- Dynamic Tailored Reason -->
          <div class="gift-reason-box">
            <div class="reason-label">
              <span>💡 왜 이 선물이 딱일까요?</span>
            </div>
            <div class="reason-text">${personalizedReason}</div>
          </div>

          <!-- Tags & Quick Search -->
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
            <div class="gift-tags-row" style="margin-bottom: 0;">
              ${gift.tags.map(t => `<span class="gift-tag">${t}</span>`).join('')}
              <span class="gift-tag">#${mbti}추천</span>
            </div>
            <a href="${searchUrl}" target="_blank" rel="noopener noreferrer" class="gift-search-btn">
              <span>🔍 쇼핑 최저가 검색</span>
            </a>
          </div>
        `;

        container.appendChild(card);
      });
    }

    function toggleHeart(giftId, btnElement) {
      if (state.heartedGifts.has(giftId)) {
        state.heartedGifts.delete(giftId);
        btnElement.classList.remove('hearted');
        btnElement.textContent = '🤍';
        showToast("위시리스트에서 뺐어요 🍃");
      } else {
        state.heartedGifts.add(giftId);
        btnElement.classList.add('hearted');
        btnElement.textContent = '❤️';
        showToast("위시리스트 하트에 쏙 담았어요! 💖");
      }
    }

    /* ==========================================================================
       8. Modify Choices Flow ("다른 선택으로 다른 추천보기")
          - 이전 선택값이 그대로 유지된 상태로 입력 화면으로 이동
          - 일부 옵션만 변경한 뒤 '다시 결과확인하기' 클릭 시 새 추천 결과 출력
       ========================================================================== */
    function modifyPreferences() {
      // Set modifying state flag
      state.isModifying = true;

      // Update CTA button label to '다시 결과확인하기'
      document.getElementById('submit-btn-text').textContent = "✨ 다시 결과확인하기";
      document.getElementById('input-page-heading').textContent = "선택을 변경하고 다시 확인해 보세요";

      // Navigate to input view (Previous selections are automatically preserved!)
      showView('view-input');
      showToast("이전 선택이 유지되어 있어요. 원하는 항목을 수정해 보세요! ✏️");
    }

    function resetAllChoices() {
      state.gender = null;
      state.age = null;
      state.mbti = null;
      state.occasion = null;
      state.budget = null;
      state.isModifying = false;

      // Uncheck all UI elements
      document.querySelectorAll('.check-card').forEach(c => c.classList.remove('checked'));
      document.querySelectorAll('.mbti-card').forEach(c => c.classList.remove('checked'));
      document.querySelectorAll('.trait-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('mbti-chip-display').innerHTML = `<span>선택 대기중 🍃</span>`;
      document.getElementById('submit-btn-text').textContent = "🎁 맞춤 선물 5가지 추천받기";
      document.getElementById('input-page-heading').textContent = "받는 분에 대해 5가지만 알려주세요";
      hideValidationAlert();

      goToHome();
      showToast("선택지가 초기화되었어요 🍃");
    }

    /* ==========================================================================
       9. Toast & Clipboard Share Helpers
       ========================================================================== */
    let toastTimeout = null;
    function showToast(message) {
      const toast = document.getElementById('toast-popup');
      toast.textContent = message;
      toast.classList.add('show');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }

    function copyResultSummary() {
      const { gender, age, mbti, occasion, budget } = state;
      const top5 = calculateRecommendations();

      let copyText = `🎁 [포근선물] 맞춤 선물 큐레이션 결과 리포트\n`;
      copyText += `━━━━━━━━━━━━━━━━━━━━━\n`;
      copyText += `📌 대상: ${LABELS.gender[gender]} / ${LABELS.age[age]} / MBTI: ${mbti}\n`;
      copyText += `📌 상황: ${LABELS.occasion[occasion]} / 예산: ${LABELS.budget[budget]}\n\n`;
      copyText += `✨ 추천 선물 TOP 5:\n`;

      top5.forEach((gift, idx) => {
        copyText += `${idx + 1}위. ${gift.name} (${gift.priceDisplay})\n`;
        copyText += `   카테고리: ${gift.category} | ${gift.tags.join(' ')}\n`;
      });
      copyText += `\n숲속의 큐레이터 토리가 추천한 실패 없는 선물 컬렉션 🍃`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(copyText).then(() => {
          showToast("추천 선물 리스트가 클립보드에 복사되었어요! 📋");
        }).catch(() => {
          fallbackCopyText(copyText);
        });
      } else {
        fallbackCopyText(copyText);
      }
    }

    function fallbackCopyText(text) {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        showToast("추천 선물 리스트가 클립보드에 복사되었어요! 📋");
      } catch (err) {
        showToast("복사 권한이 제한되어 있습니다.");
      }
      document.body.removeChild(textArea);
    }

    /* ==========================================================================
       10. Festive Confetti & Falling Leaves Animation Effect
       ========================================================================== */
    function fireConfetti() {
      const canvas = document.getElementById('confetti-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const colors = ['#4A7C59', '#679273', '#E07A5F', '#E9B858', '#F28482', '#A3B18A'];

      for (let i = 0; i < 45; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -canvas.height * 0.5,
          size: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 3 + 2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 5,
          opacity: 1
        });
      }

      let frame = 0;
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;

        particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.rotationSpeed;
          p.vy += 0.04; // gravity

          if (p.y < canvas.height + 20) {
            active = true;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.opacity;

            // Draw soft rounded leaf / confetti
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.restore();
          }
        });

        frame++;
        if (active && frame < 180) {
          requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }

      animate();
    }

    // Auto resize confetti canvas
    window.addEventListener('resize', () => {
      const canvas = document.getElementById('confetti-canvas');
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });
