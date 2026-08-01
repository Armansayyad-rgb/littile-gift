export type CoreProgress={firstLetterRead:boolean;wheelSpun:boolean;completedGames:number;giftCompleted:boolean;moodSelected:boolean;starsDiscovered:number};
export type ProgressionRules={requiredCoreActivities:number;featureFlags:Record<string,boolean>};
export const coreActivityCount=(p:CoreProgress,r:ProgressionRules)=>[p.wheelSpun,p.completedGames>=2,p.giftCompleted,p.moodSelected,p.starsDiscovered>=3].filter(Boolean).length;
export const finalPortalUnlocked=(p:CoreProgress,r:ProgressionRules)=>p.firstLetterRead&&coreActivityCount(p,r)>=r.requiredCoreActivities;
