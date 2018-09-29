export enum EbmlTagId {
    ChapterDisplay = 0x80,
    TrackType = 0x83,
    ChapString = 0x85,
    CodecID = 0x86,
    FlagDefault = 0x88,
    ChapterTrackNumber = 0x89,
    ChapterTimeStart = 0x91,
    ChapterTimeEnd = 0x92,
    CueRefTime = 0x96,
    CueRefCluster = 0x97,
    ChapterFlagHidden = 0x98,
    ContentCompAlgo = 0x4254,
    ContentCompSettings = 0x4255,
    DocType = 0x4282,
    DocTypeReadVersion = 0x4285,
    EBMLVersion = 0x4286,
    DocTypeVersion = 0x4287,
    SegmentFamily = 0x4444,
    DateUTC = 0x4461,
    TagDefault = 0x4484,
    TagBinary = 0x4485,
    TagString = 0x4487,
    Duration = 0x4489,
    ChapterFlagEnabled = 0x4598,
    FileMimeType = 0x4660,
    FileUsedStartTime = 0x4661,
    FileUsedEndTime = 0x4662,
    FileReferral = 0x4675,
    ContentEncodingOrder = 0x5031,
    ContentEncodingScope = 0x5032,
    ContentEncodingType = 0x5033,
    ContentCompression = 0x5034,
    ContentEncryption = 0x5035,
    CueBlockNumber = 0x5378,
    ChapterStringUID = 0x5654,
    WritingApp = 0x5741,
    SilentTracks = 0x5854,
    ContentEncoding = 0x6240,
    BitDepth = 0x6264,
    SignedElement = 0x6532,
    TrackTranslate = 0x6624,
    ChapProcessCommand = 0x6911,
    ChapProcessTime = 0x6922,
    ChapterTranslate = 0x6924,
    ChapProcessData = 0x6933,
    ChapProcess = 0x6944,
    ChapProcessCodecID = 0x6955,
    Tag = 0x7373,
    SegmentFilename = 0x7384,
    AttachmentLink = 0x7446,
    CodecName = 0x258688,
    Segment = 0x18538067,
    TagLanguage = 0x447a,
    TagName = 0x45a3,
    SimpleTag = 0x67c8,
    TagAttachmentUID = 0x63c6,
    TagChapterUID = 0x63c4,
    TagEditionUID = 0x63c9,
    TagTrackUID = 0x63c5,
    TargetType = 0x63ca,
    TargetTypeValue = 0x68ca,
    Targets = 0x63c0,
    Tags = 0x1254c367,
    ChapProcessPrivate = 0x450d,
    ChapCountry = 0x437e,
    ChapLanguage = 0x437c,
    ChapterTrack = 0x8f,
    ChapterPhysicalEquiv = 0x63c3,
    ChapterSegmentEditionUID = 0x6ebc,
    ChapterSegmentUID = 0x6e67,
    ChapterUID = 0x73c4,
    ChapterAtom = 0xb6,
    EditionFlagOrdered = 0x45dd,
    EditionFlagDefault = 0x45db,
    EditionFlagHidden = 0x45bd,
    EditionUID = 0x45bc,
    EditionEntry = 0x45b9,
    Chapters = 0x1043a770,
    FileUID = 0x46ae,
    FileData = 0x465c,
    FileName = 0x466e,
    FileDescription = 0x467e,
    AttachedFile = 0x61a7,
    Attachments = 0x1941a469,
    CueRefCodecState = 0xeb,
    CueRefNumber = 0x535f,
    CueReference = 0xdb,
    CueCodecState = 0xea,
    CueDuration = 0xb2,
    CueRelativePosition = 0xf0,
    CueClusterPosition = 0xf1,
    CueTrack = 0xf7,
    CueTrackPositions = 0xb7,
    CueTime = 0xb3,
    CuePoint = 0xbb,
    Cues = 0x1c53bb6b,
    AESSettingsCipherMode = 0x47e8,
    ContentEncAESSettings = 0x47e7,
    ContentSigHashAlgo = 0x47e6,
    ContentSigAlgo = 0x47e5,
    ContentSigKeyID = 0x47e4,
    ContentSignature = 0x47e3,
    ContentEncKeyID = 0x47e2,
    ContentEncAlgo = 0x47e1,
    ContentEncodings = 0x6d80,
    TrickMasterTrackSegmentUID = 0xc4,
    TrickMasterTrackUID = 0xc7,
    TrickTrackFlag = 0xc6,
    TrickTrackSegmentUID = 0xc1,
    TrickTrackUID = 0xc0,
    TrackJoinUID = 0xed,
    TrackJoinBlocks = 0xe9,
    TrackPlaneType = 0xe6,
    TrackPlaneUID = 0xe5,
    TrackPlane = 0xe4,
    TrackCombinePlanes = 0xe3,
    TrackOperation = 0xe2,
    ChannelPositions = 0x7d7b,
    Channels = 0x9f,
    OutputSamplingFrequency = 0x78b5,
    SamplingFrequency = 0xb5,
    Audio = 0xe1,
    FrameRate = 0x2383e3,
    GammaValue = 0x2fb523,
    ColourSpace = 0x2eb524,
    AspectRatioType = 0x54b3,
    DisplayUnit = 0x54b2,
    DisplayHeight = 0x54ba,
    DisplayWidth = 0x54b0,
    PixelCropRight = 0x54dd,
    PixelCropLeft = 0x54cc,
    PixelCropTop = 0x54bb,
    PixelCropBottom = 0x54aa,
    PixelHeight = 0xba,
    PixelWidth = 0xb0,
    OldStereoMode = 0x53b9,
    AlphaMode = 0x53c0,
    StereoMode = 0x53b8,
    FlagInterlaced = 0x9a,
    Video = 0xe0,
    TrackTranslateTrackID = 0x66a5,
    TrackTranslateCodec = 0x66bf,
    TrackTranslateEditionUID = 0x66fc,
    SeekPreRoll = 0x56bb,
    CodecDelay = 0x56aa,
    TrackOverlay = 0x6fab,
    CodecDecodeAll = 0xaa,
    CodecDownloadURL = 0x26b240,
    CodecInfoURL = 0x3b4040,
    CodecSettings = 0x3a9697,
    CodecPrivate = 0x63a2,
    Language = 0x22b59c,
    Name = 0x536e,
    MaxBlockAdditionID = 0x55ee,
    TrackOffset = 0x537f,
    TrackTimecodeScale = 0x23314f,
    DefaultDecodedFieldDuration = 0x234e7a,
    DefaultDuration = 0x23e383,
    MaxCache = 0x6df8,
    MinCache = 0x6de7,
    FlagLacing = 0x9c,
    FlagForced = 0x55aa,
    FlagEnabled = 0xb9,
    TrackUID = 0x73c5,
    TrackNumber = 0xd7,
    TrackEntry = 0xae,
    Tracks = 0x1654ae6b,
    EncryptedBlock = 0xaf,
    ReferenceTimeCode = 0xca,
    ReferenceOffset = 0xc9,
    ReferenceFrame = 0xc8,
    SliceDuration = 0xcf,
    Delay = 0xce,
    BlockAdditionID = 0xcb,
    FrameNumber = 0xcd,
    LaceNumber = 0xcc,
    TimeSlice = 0xe8,
    Slices = 0x8e,
    DiscardPadding = 0x75a2,
    CodecState = 0xa4,
    ReferenceVirtual = 0xfd,
    ReferenceBlock = 0xfb,
    ReferencePriority = 0xfa,
    BlockDuration = 0x9b,
    BlockAdditional = 0xa5,
    BlockAddID = 0xee,
    BlockMore = 0xa6,
    BlockAdditions = 0x75a1,
    BlockVirtual = 0xa2,
    Block = 0xa1,
    BlockGroup = 0xa0,
    SimpleBlock = 0xa3,
    PrevSize = 0xab,
    Position = 0xa7,
    SilentTrackNumber = 0x58d7,
    Timecode = 0xe7,
    Cluster = 0x1f43b675,
    MuxingApp = 0x4d80,
    Title = 0x7ba9,
    TimecodeScaleDenominator = 0x2ad7b2,
    TimecodeScale = 0x2ad7b1,
    ChapterTranslateID = 0x69a5,
    ChapterTranslateCodec = 0x69bf,
    ChapterTranslateEditionUID = 0x69fc,
    NextFilename = 0x3e83bb,
    NextUID = 0x3eb923,
    PrevFilename = 0x3c83ab,
    PrevUID = 0x3cb923,
    SegmentUID = 0x73a4,
    Info = 0x1549a966,
    SeekPosition = 0x53ac,
    SeekID = 0x53ab,
    Seek = 0x4dbb,
    SeekHead = 0x114d9b74,
    SignatureElementList = 0x7e7b,
    SignatureElements = 0x7e5b,
    Signature = 0x7eb5,
    SignaturePublicKey = 0x7ea5,
    SignatureHash = 0x7e9a,
    SignatureAlgo = 0x7e8a,
    SignatureSlot = 0x1b538667,
    CRC32 = 0xbf,
    Void = 0xec,
    EBMLMaxSizeLength = 0x42f3,
    EBMLMaxIDLength = 0x42f2,
    EBMLReadVersion = 0x42f7,
    EBML = 0x1a45dfa3,
}