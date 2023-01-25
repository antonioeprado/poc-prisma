export type ApplicationError = {
  name: string;
  message: string;
};

export type InvalidPayloadError = ApplicationError & {
  details: string[];
};
