import sys
from PIL import Image, ImageDraw

def process_image(input_path, output_path):
    # Open the image
    img = Image.open(input_path).convert("RGBA")
    
    # Calculate the bounding box for cropping (enlarging the logo internally)
    width, height = img.size
    
    # To "enlarge" the logo, we'll crop some of the padding off.
    # We crop 15% from all sides, effectively zooming in.
    crop_amount_w = int(width * 0.15)
    crop_amount_h = int(height * 0.15)
    
    # Crop the image to center (zoom in)
    box = (crop_amount_w, crop_amount_h, width - crop_amount_w, height - crop_amount_h)
    img = img.crop(box)
    
    # Re-evaluate dimensions after crop
    width, height = img.size
    
    # Make it a square for a perfect circle favicon, use the smallest dimension
    min_dim = min(width, height)
    left = (width - min_dim) / 2
    top = (height - min_dim) / 2
    right = (width + min_dim) / 2
    bottom = (height + min_dim) / 2
    
    img = img.crop((left, top, right, bottom))
    
    # New square dimension
    dim = img.size[0]
    
    # Create the circular mask
    mask = Image.new("L", (dim, dim), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, dim, dim), fill=255)
    
    # Apply mask
    out = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    out.paste(img, (0, 0), mask=mask)
    
    # Resize to standard favicon max size mapping to retain quality
    out = out.resize((256, 256), Image.Resampling.LANCZOS)
    
    # Save the result as PNG
    out.save(output_path, "PNG")
    print(f"Successfully processed {input_path} -> {output_path}")

if __name__ == "__main__":
    process_image('public/images/logo.jpeg', 'public/images/logo-rounded.png')
