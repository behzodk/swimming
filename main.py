import numpy as np
import matplotlib.pyplot as plt

def draw_circle_with_triangles(center=(0,0), radius=1, num_triangles=1):
    x_c, y_c = center
    angles = np.linspace(0, 2*np.pi, num_triangles + 1)  # Angles from 0 to 2π

    # Compute circle points
    x_points = x_c + radius * np.cos(angles)
    y_points = y_c + radius * np.sin(angles)

    fig, ax = plt.subplots()
    ax.set_aspect('equal')

    # Draw triangles
    for i in range(num_triangles):
        triangle_x = [x_c, x_points[i], x_points[i+1], x_c]
        triangle_y = [y_c, y_points[i], y_points[i+1], y_c]
        ax.fill(triangle_x, triangle_y, 'b', alpha=0.3, edgecolor='black')  # Blue transparent triangles

    # Draw the circle outline
    ax.plot(x_points, y_points, 'r')  # Red outline
    ax.scatter([x_c], [y_c], color='black', zorder=3)  # Circle center

    plt.show()

draw_circle_with_triangles(radius=5, num_triangles=45)