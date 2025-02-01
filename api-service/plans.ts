import { useMutation, useQuery } from "@tanstack/react-query";

export type PlansResponseType = {
  plans: {
    id: string;
    user_id: string;
    plan_name: string;
    description: string;
    is_active: boolean;
    is_usecase: boolean;
    created_at: string;
    updated_at: string;
    metadata: null;
  }[];
};

export const getPlans = async (userId: string, isActive: boolean = false) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans/${userId}?is_active=${isActive}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data as PlansResponseType;
};

export const useGetPlans = (userId: string, isActive: boolean) => {
  return useQuery({
    queryKey: ["plans", userId, isActive],
    queryFn: () => getPlans(userId, isActive),
    enabled: !!userId,
  });
};

export type UsecasePlansResponseType = {
  plan_count: 1;
  plans: [
    {
      created_at: string;
      description: string;
      id: string;
      image_animation_status: string;
      is_active: boolean;
      is_known_flow: boolean;
      plan_name: string;
      plan_type: string;
      progress_tracking: string;
      status: string;
      updated_at: string;
      user_id: string;
    }
  ];
};

export const getUsecasePlans = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans/usecases`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data as UsecasePlansResponseType;
};

export const useGetUsecasePlans = () => {
  return useQuery({
    queryKey: ["usecase-plans"],
    queryFn: () => getUsecasePlans(),
  });
};

export type ExecutionsPlansResponseType = {
  executions: {
    id: string;
    plan_id: string;
    status: string;
    started_at: string;
    completed_at: string;
    result: {};
  }[];
};

export const getExecutionsPlans = async (planId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans/${planId}/executions`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data as ExecutionsPlansResponseType;
};

export const useGetExecutionsPlans = (planId: string) => {
  return useQuery({
    queryKey: ["executions-plans", planId],
    queryFn: () => getExecutionsPlans(planId),
    enabled: !!planId,
  });
};

export type PlanStepsResponseType = {
  step_count: number;
  steps: [
    {
      created_at: string;
      dependencies: [];
      id: string;
      is_completed: boolean;
      is_critical: boolean;
      plan_id: string;
      step_details: string;
      step_name: string;
      step_order: number;
      step_type: string;
      updated_at: string;
    }
  ];
};

export const getPlanSteps = async (planId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans/${planId}/steps`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data as PlanStepsResponseType;
};

export const useGetPlanSteps = (planId: string) => {
  return useQuery({
    queryKey: ["plan-steps", planId],
    queryFn: () => getPlanSteps(planId),
    enabled: !!planId,
  });
};

export type CreatePlanPayloadType = {
  plan_name: string;
  description: string;
  user_id: string;
  steps: {
    step_number: number;
    description: string;
    metadata: {};
  }[];
  metadata: {};
  is_usecase: boolean;
};

export type CreatePlanResponseType = {
  plan: {
    id: string;
    user_id: string;
    plan_name: string;
    description: string;
    is_active: boolean;
    is_usecase: boolean;
    created_at: string;
    updated_at: string;
    metadata: {};
  };
};

export const createPlan = async (payload: CreatePlanPayloadType) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/plans`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data as CreatePlanResponseType;
};

export const useCreatePlan = () => {
  return useMutation({
    mutationFn: (payload: CreatePlanPayloadType) => createPlan(payload),
  });
};

export type UpdatePlanPayloadType = {
  is_active: boolean;
};

export type UpdatePlanResponseType = {
  id: string;
  user_id: string;
  plan_name: string;
  description: string;
  is_active: boolean;
  is_usecase: boolean;
  created_at: string;
  updated_at: string;
  metadata: {};
};

export const updatePlan = async (
  planId: string,
  payload: UpdatePlanPayloadType
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/plans/${planId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const data = await response.json();
  return data as UpdatePlanResponseType;
};

export const useUpdatePlan = () => {
  return useMutation({
    mutationFn: ({
      planId,
      payload,
    }: {
      planId: string;
      payload: UpdatePlanPayloadType;
    }) => updatePlan(planId, payload),
  });
};
