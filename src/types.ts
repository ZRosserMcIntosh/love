export type EnergyBoundary =
  | 'body'
  | 'operational'
  | 'embodied'
  | 'delivered'
  | 'downstream';

/**
 * A physical energy flow associated with an act or project.
 *
 * parentFlowId means this flow is an explanatory subdivision already included
 * inside its parent. Parent flows are counted; child flows are displayed but
 * excluded from ledger totals to prevent known double counting.
 */
export interface EnergyFlow {
  id: string;
  label: string;
  boundary: EnergyBoundary;
  actualJoules: number;
  counterfactualJoules: number;
  causalAttribution: number;
  parentFlowId?: string;
  notes?: string;
}

export interface EnergyLedgerSummary {
  countedFlowIds: string[];
  informationalFlowIds: string[];
  actualJoules: number;
  counterfactualJoules: number;
  allocatedJoules: number;
  inducedJoules: number;
  unattributedActualJoules: number;
}

export interface MetabolicEnergyInput {
  massKg: number;
  durationHours: number;
  mets: number;
}

export interface IncrementalMetabolicEnergyInput {
  massKg: number;
  durationHours: number;
  actualMets: number;
  counterfactualMets: number;
}
