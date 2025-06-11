

export type Room = {
  roomId: number;
  roomNumber: number;
  numberOfSeat: number;
  seatPerRow: number;

  roomType: string;

  screenHeight?: number; // Optional property
  screenWidth?: number; // Optional property
  projectionType?: string; // Optional property
  vibratingSeats?: boolean; // Optional property
}
