/**
 * Converts an object to a base64 string
 * @param obj - The object to convert
 * @returns Base64 encoded string representation of the object
 */
export const objectToBase64 = (obj: any): string => {
  try {
    const jsonString = JSON.stringify(obj);
    return Buffer.from(jsonString).toString("base64");
  } catch (error) {
    throw new Error("Failed to convert object to base64");
  }
};

/**
 * Converts a base64 string back to an object
 * @param base64String - The base64 string to convert
 * @returns Decoded object
 */
export const base64ToObject = <T = any>(base64String: string): T => {
  try {
    if (!base64String) {
      throw new Error("Base64 string is empty or undefined");
    }

    // Validate base64 string format
    if (!/^[A-Za-z0-9+/=]+$/.test(base64String)) {
      throw new Error("Invalid base64 string format");
    }

    const jsonString = Buffer.from(base64String, "base64").toString();
    if (!jsonString) {
      throw new Error("Decoded string is empty");
    }

    const parsed = JSON.parse(jsonString);
    if (!parsed) {
      throw new Error("Failed to parse JSON");
    }

    return parsed as T;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to convert base64 to object: ${error.message}`);
    }
    throw new Error("Failed to convert base64 to object");
  }
};
